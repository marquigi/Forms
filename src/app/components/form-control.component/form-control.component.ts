import { Component } from '@angular/core';
import { FormControl, ValidatorFn, Validators } from '@angular/forms';

interface Comune {
  nome: string;
  cod_istat: string;
}

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
  nome = new FormControl('Ivano');
  nomeConValidatore = new FormControl('', Validators.required);

  constructor() {
    //this.roma = { nome: "Roma", cod_istat: "000" }
  }

  ngOnInit() {
    // L'observable valueChanges serve a "monitorare" il cambiamento del valore del FormControl
    this.nome.valueChanges.subscribe((v) => {
      console.log(v);
    });

    // mi sottoscrivo al cambiamento della provincia
    this.provincia.valueChanges.subscribe((p) => {
      // se ho scelto "Scegli" -> non ci sono comuni e mi fermo
      if (p === '') {
        this.comuni = undefined;
        this.comune.setValue('');
        this.comune.disable();
        return;
      }

      this.comuni = this.province.find((prov) => prov.sigla === p)?.comuni;
      this.comune.enable();

      // oppure...
      // for (let provincia of this.province) {
      //   if (provincia.sigla === p) {
      //     this.comuni = provincia.comuni;
      //     break;
      //   }
      // }
    });

    this.comune.setValue('');
    this.comune.disable();

    // non ho un conto corrente
    this.no_cc.valueChanges.subscribe((x) => {
      // se il checkbox è acceso, rimuovo tutti i validatori da IBAN
      if (x === true) {
        this.iban.clearValidators();
        this.iban.disable();
      }
      // se lo spengo, riapplico i validatori
      else {
        this.iban.enable();
        this.iban.setValidators(this.iban_validators);
      }
      // in qualsiasi caso, come richiesto dal framework, invoco la updateValueAndValidity()
      this.iban.updateValueAndValidity(); // importante!
    });
  }

  stampaNome() {
    alert(`Hai digitato ${this.nome.value}`);
  }

  cambiaNome() {
    // { emitEvent: false } serve a non innescare la valueChanges
    this.nome.setValue('Laura', { emitEvent: false });
  }

  // <h4>FormControl su Select e Radio button</h4>
  citta = new FormControl('');
  cittaOpts: { nome: string; cod_cat: string }[] = [
    { nome: 'Roma', cod_cat: 'H501' },
    { nome: 'Milano', cod_cat: 'A072' },
  ];
  sesso = new FormControl('M');

  // <h4>Select dipendenti</h4>
  provincia = new FormControl('');
  comune = new FormControl('');
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

  invia() {
    // if(this.nomeConValidatore.valid){
    //   // Ok, invio i dati al backend...
    // }
    // else {
    //   this.nomeConValidatore.markAsTouched()
    // }

    if (this.nomeConValidatore.invalid) {
      this.nomeConValidatore.markAsTouched();
      return;
    }
    // chiamata ajax
  }

  // <h4>FormControl con validatore dinamico</h4>
  iban_validators: ValidatorFn[] = [
    Validators.required,
    Validators.pattern(/^[A-Z]{2}[0-9]{2}[A-Z0-9]{11,30}$/),
  ];
  iban = new FormControl('', this.iban_validators);
  no_cc = new FormControl(false);
}

