import { Component } from '@angular/core';
import { FormControl, ValidatorFn, Validators } from '@angular/forms';

// Modello per rappresentare un comune
interface Comune {
  nome: string;
  cod_istat: string;
}

// Modello per rappresentare una provincia con la lista dei comuni
interface Provincia {
  nome: string;
  sigla: string;
  comuni: Comune[];
}

@Component({
  selector: 'app-form-control',
  standalone: false,
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.scss',
})
export class FormControlComponent {
  // <h4>FormControl singolo</h4>
  // FormControl per campo nome: Sintassi crea controllo, Semantica rappresenta input nome
  nome = new FormControl('Ivano'); // Rappresenta il campo nome
  // FormControl con validatore: Sintassi definisce validazione, Semantica campo obbligatorio
  nomeConValidatore = new FormControl('', Validators.required); // Campo con validatore obbligatorio

  constructor() {
    //this.roma = { nome: "Roma", cod_istat: "000" }
  }

  // Metodo chiamato automaticamente dopo l'inizializzazione del componente
  ngOnInit() {
    // Sintassi: subscribe a valueChanges, Semantica: reagisce a cambiamento valore nome
    this.nome.valueChanges.subscribe((v) => {

      console.log(v); // Stampo nuovo valore in console
    });

    // Sintassi: subscribe a valueChanges, Semantica: aggiorna comuni al cambio provincia
    this.provincia.valueChanges.subscribe((p) => {
      if (p === '') {
        // Sintassi: reset valori, Semantica: nessuna provincia selezionata disabilita comuni
        this.comuni = undefined; // Cancello lista comuni
        this.comune.setValue(''); // Reset campo comune
        this.comune.disable(); // Disabilito select comune
        return;
      }

      // Sintassi: ricerca con find, Semantica: aggiorna lista comuni in base a provincia
      this.comuni = this.province.find((prov) => prov.sigla === p)?.comuni;
      this.comune.enable(); // Abilito select dei comuni

      // oppure...
      // for (let provincia of this.province) {
      //   if (provincia.sigla === p) {
      //     this.comuni = provincia.comuni;
      //     break;
      //   }
      // }
    });

    // Sintassi: setValue e disable, Semantica: inizializza campo comune vuoto e disabilitato
    this.comune.setValue(''); // Imposto comune a vuoto
    this.comune.disable(); // Inizio con campo disabilitato

    // Sintassi: subscribe a valueChanges, Semantica: gestisce validazione e abilitazione IBAN
    this.no_cc.valueChanges.subscribe((x) => {
      // se il checkbox è acceso, rimuovo tutti i validatori da IBAN
      if (x === true) {
        // Sintassi: rimuove validatori e disabilita, Semantica: nessun conto corrente disabilita IBAN
        this.iban.clearValidators(); // Tolgo validatori IBAN
        this.iban.disable(); // IBAN non più editabile
      }
      // se lo spengo, riapplico i validatori
      else {
        // Sintassi: abilita e imposta validatori, Semantica: conto corrente presente abilita IBAN
        this.iban.enable(); // Riattivo campo IBAN
        this.iban.setValidators(this.iban_validators); // Riapplico validatori
      }
      // Sintassi: aggiorna stato validazione, Semantica: necessario dopo modifica validatori
      this.iban.updateValueAndValidity(); // Aggiorno stato validazione; IMPORTANTE!
    });
  }

  stampaNome() {
    // Sintassi: alert con valore, Semantica: mostra valore corrente campo nome
    alert(`Hai digitato ${this.nome.value}`); // Alert con valore aggiornato
    // Cambio il valore senza triggerare valueChanges
  }

  cambiaNome() {
    // { emitEvent: false } serve a non innescare la valueChanges
    // Sintassi: setValue senza evento, Semantica: cambia nome senza triggerare eventi
    this.nome.setValue('Laura', { emitEvent: false });
  }


  // <h4>FormControl su Select e Radio button</h4>
  // FormControl per select città: Sintassi crea controllo, Semantica selezione città
  citta = new FormControl('');
  cittaOpts: { nome: string; cod_cat: string }[] = [
    { nome: 'Roma', cod_cat: 'H501' },
    { nome: 'Milano', cod_cat: 'A072' },
  ];
  // FormControl per select città: Sintassi crea controllo, Semantica selezione città
  sesso = new FormControl('M');

  // <h4>Select dipendenti</h4>
  // FormControl per select città: Sintassi crea controllo, Semantica selezione città
  provincia = new FormControl('');
  // FormControl per provincia: Sintassi crea controllo, Semantica selezione provincia
  comune = new FormControl('');
  // FormControl per comune: Sintassi crea controllo, Semantica selezione comune associato
  province: Provincia[] = [
    {
      nome: 'Roma',
      sigla: 'RM',
      comuni: [
        { nome: 'Nettuno', cod_istat: 'A001' },
        { nome: 'Palestrina', cod_istat: 'B001' },
        { nome: 'Fiumicino', cod_istat: 'C001' },
      ],
    },
    {
      nome: 'Milano',
      sigla: 'MI',
      comuni: [
        { nome: 'Carimate', cod_istat: 'M001' },
        { nome: 'Cinisello balsamo', cod_istat: 'M002' },
        { nome: 'Segrate', cod_istat: 'M003' },
      ],
    },
  ];
  comuni?: Comune[] = undefined;

  // Metodo per gestire invio dei dati
  invia() {
    // if(this.nomeConValidatore.valid){
    //   // Ok, invio i dati al backend...
    // }
    // else {
    //   this.nomeConValidatore.markAsTouched()
    // }

    if (this.nomeConValidatore.invalid) {
      // Sintassi: markAsTouched, Semantica: mostra errore se nome non valido
      this.nomeConValidatore.markAsTouched(); // Mostro messaggio errore
      return; // Interrompo funzione
    }
    // Qui farei richiesta al server
  }

  // <h4>FormControl con validatore dinamico</h4>
  // Validatori per il campo IBAN: Sintassi array di ValidatorFn, Semantica validazione formato e obbligatorietà
  iban_validators: ValidatorFn[] = [
    Validators.required, // Campo Obbligatorio
    Validators.pattern(/^[A-Z]{2}[0-9]{2}[A-Z0-9]{11,30}$/), // Controlla formato IBAN
  ];
  // FormControl IBAN con validazione dinamica: Sintassi crea controllo con validatori, Semantica campo IBAN con regole
  iban = new FormControl('', this.iban_validators);
  // FormControl checkbox no_cc: Sintassi crea controllo booleano, Semantica indica assenza conto corrente
  no_cc = new FormControl(false);
}

