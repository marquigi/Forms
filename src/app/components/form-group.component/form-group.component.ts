import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  standalone: false,
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.scss',
})


export class FormGroupComponent {
  // Creo un FormGroup con controlli annidati per indirizzo
  frm = new FormGroup({
    nome: new FormControl(''), // Campo nome
    cognome: new FormControl(''), // Campo cognome
    indirizzo: new FormGroup({
      via: new FormControl(''), // Campi dell'indirizzo
      civico: new FormControl(''), // Campi dell'indirizzo
    }),
  });

  // Metodo che parte all'inizializzazione del componente
  ngOnInit() {
    // Il ValueChanges sul FormGroup si attiva per tutti i suoi controlli interni
    // Se cambia qualsiasi campo del FormGroup
    this.frm.valueChanges.subscribe((v) => {
      console.log(v);  // Stampo tutti i valori aggiornati
    });
    // Monitoro solo i cambiamenti del sotto-gruppo indirizzo
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
    // Devo fornire tutti i campi del gruppo
  }

  impostaCognome() {
    // il metodo patchValue() imposta ciò che è possibile impostare
    this.frm.patchValue({ cognome: 'Rizzitelli' });
    // Imposto solo i campi indicati
  }

  // Mostro l'intero valore del form
  stampaFrm() {
    console.log(this.frm.value);
  }

  // Accesso a un controllo interno con get()
  stampaCognome() {
    // per "raggiungere" un elemento interno al FormGroup
    // si utilizza il metodo get
    alert(this.frm.get('cognome')!.value);
  }

  // Imposto tutto il sotto-FormGroup indirizzo
  setIndirizzo() {
    this.getIndirizzo().setValue({
      via: 'Via del corso',
      civico: '20',
    });
  }

  // Metodo helper per ottenere il gruppo indirizzo
  getIndirizzo() {
    return this.frm.get('indirizzo') as FormGroup; // CAST
  }
}
