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
  // un form control è un QUALSIASI controllo di un form
  nome = new FormControl('Ivano'); // Rappresenta il campo nome
  nomeConValidatore = new FormControl('', Validators.required); // Campo con validatore obbligatorio
  // NOTA

  constructor() {
    //this.roma = { nome: "Roma", cod_istat: "000" }
  }

  // Metodo chiamato automaticamente dopo l'inizializzazione del componente
  ngOnInit() {
    // L'observable valueChanges serve a "monitorare" il cambiamento del valore del FormControl
    this.nome.valueChanges.subscribe((v) => {
      // Mi iscrivo ai cambiamenti del campo nome
      console.log(v); // Stampo nuovo valore in console
    });

    // mi sottoscrivo al cambiamento della provincia
    this.provincia.valueChanges.subscribe((p) => {
      // Quando cambia la provincia aggiorno i comuni
      if (p === '') {
        // Nessuna provincia scelta
        this.comuni = undefined; // Cancello lista comuni
        this.comune.setValue(''); // Reset campo comune
        this.comune.disable(); // Disabilito select comune
        return;
      }

      // NOTA
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

    this.comune.setValue(''); // Imposto comune a vuoto
    this.comune.disable(); // Inizio con campo disabilitato

    // non ho un conto corrente
    this.no_cc.valueChanges.subscribe((x) => {
      // se il checkbox è acceso, rimuovo tutti i validatori da IBAN
      if (x === true) {
        // Se non ho conto rimuovo controlli
        this.iban.clearValidators(); // Tolgo validatori IBAN
        this.iban.disable(); // IBAN non più editabile
      }
      // se lo spengo, riapplico i validatori
      else {
        // Se ho il conto
        this.iban.enable(); // Riattivo campo IBAN
        this.iban.setValidators(this.iban_validators); // Riapplico validatori
      }
      // in qualsiasi caso, come richiesto dal framework, invoco la updateValueAndValidity()
      this.iban.updateValueAndValidity(); // Aggiorno stato validazione; IMPORTANTE!
    });
  }

  stampaNome() {
    // Modifica il nome da codice
    // Mostra il valore digitato in nome
    alert(`Hai digitato ${this.nome.value}`); // Alert con valore aggiornato
    // Cambio il valore senza triggerare valueChanges
  }

  cambiaNome() {
    // { emitEvent: false } serve a non innescare la valueChanges
    this.nome.setValue('Laura', { emitEvent: false });
  }

  // FormControl per select città
  // <h4>FormControl su Select e Radio button</h4>
  citta = new FormControl('');
  cittaOpts: { nome: string; cod_cat: string }[] = [
    { nome: 'Roma', cod_cat: 'H501' },
    { nome: 'Milano', cod_cat: 'A072' },
  ];
  sesso = new FormControl('M');

  // <h4>Select dipendenti</h4>
  // FormControl per provincia
  provincia = new FormControl('');
  // FormControl per comune dipendente
  comune = new FormControl('');
  // Lista province con relativi comuni
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
      // Se il nome non è valido mi fermo
      this.nomeConValidatore.markAsTouched(); // Mostro messaggio errore
      return; // Interrompo funzione
    }
    // Qui farei richiesta al server
  }

  // <h4>FormControl con validatore dinamico</h4>
  // Validatori per il campo IBAN
  iban_validators: ValidatorFn[] = [
    Validators.required,
    Validators.pattern(/^[A-Z]{2}[0-9]{2}[A-Z0-9]{11,30}$/), // Controlla formato IBAN
  ];
  iban = new FormControl('', this.iban_validators); // FormControl IBAN con validazione dinamica
  no_cc = new FormControl(false); // Checkbox per indicare assenza conto corrente
}

