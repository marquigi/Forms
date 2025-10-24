import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  standalone: false,
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.scss',
})
export class FormGroupComponent {
  frm = new FormGroup({
    nome: new FormControl(''),
    cognome: new FormControl(''),
    indirizzo: new FormGroup({
      via: new FormControl(''),
      civico: new FormControl(''),
    }),
  });

  ngOnInit() {
    // Il ValueChanges sul FormGroup si attiva per tutti i suoi controlli interni
    this.frm.valueChanges.subscribe((v) => {
      console.log(v);
    });
    this.getIndirizzo().valueChanges.subscribe((v) => {
      // validazione dell'indirizzo sulle Google Maps API
    });
  }

  impostaTutto() {
    // il metodo setValue() imposta TUTTI i valori del FormGroup
    this.frm.setValue({
      nome: 'Ivano',
      cognome: 'Di Gese',
      indirizzo: { civico: '33', via: '' },
    });
  }

  impostaCognome() {
    // il metodo patchValue() imposta ciò che è possibile impostare
    this.frm.patchValue({ cognome: 'Rizzitelli' });
  }

  stampaFrm() {
    console.log(this.frm.value);
  }

  stampaCognome() {
    // per "raggiungere" un elemento interno al FormGroup
    // si utilizza il metodo get
    alert(this.frm.get('cognome')!.value);
  }

  setIndirizzo() {
    this.getIndirizzo().setValue({
      via: 'Via del corso',
      civico: '20',
    });
  }

  getIndirizzo() {
    return this.frm.get('indirizzo') as FormGroup; // CAST
  }
}
