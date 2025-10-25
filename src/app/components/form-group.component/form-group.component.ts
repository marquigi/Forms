import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  standalone: false,
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.scss',
})


export class FormGroupComponent {
  // Sintassi: FormGroup con FormControl annidati
  // Semantica: Definisce un form con nome, cognome e indirizzo (via, civico)
  frm = new FormGroup({
    nome: new FormControl(''), // Sintassi: FormControl con valore iniziale vuoto
    // Semantica: Campo per inserire il nome
    cognome: new FormControl(''), // Sintassi: FormControl con valore iniziale vuoto
    // Semantica: Campo per inserire il cognome
    indirizzo: new FormGroup({
      via: new FormControl(''),   // Sintassi: FormControl annidato in FormGroup
      // Semantica: Campo per inserire la via dell'indirizzo
      civico: new FormControl(''),// Sintassi: FormControl annidato in FormGroup
      // Semantica: Campo per inserire il numero civico
    }),
  });

  // Sintassi: metodo di ciclo vita ngOnInit con subscribe a valueChanges
  // Semantica: si attiva al cambio di valore di frm o indirizzo per gestire eventi
  ngOnInit() {
    // Sintassi: subscribe a valueChanges su FormGroup
    // Semantica: reagisce a ogni modifica nei controlli del form principale
    this.frm.valueChanges.subscribe((v) => {
      console.log(v);  // Sintassi: log dei valori aggiornati
      // Semantica: stampa i valori correnti del form
    });
    // Sintassi: subscribe a valueChanges su sotto-form indirizzo
    // Semantica: monitoraggio specifico dei cambiamenti dell'indirizzo
    this.getIndirizzo().valueChanges.subscribe((v) => {
      // Sintassi: callback vuota per gestione futura
      // Semantica: placeholder per validazione indirizzo con API esterne
    });
  }


  impostaTutto() {
    // Sintassi: metodo che usa setValue su FormGroup
    // Semantica: imposta tutti i valori del form in modo esplicito
    this.frm.setValue({
      nome: 'Ivano',
      cognome: 'Di Gese',
      indirizzo: { civico: '33', via: '' },
    });
    // Devo fornire tutti i campi del gruppo
  }

  impostaCognome() {
    // Sintassi: metodo che usa patchValue su FormGroup
    // Semantica: aggiorna solo i campi indicati senza richiedere tutti i valori
    this.frm.patchValue({ cognome: 'Rizzitelli' });
  }


  stampaFrm() {
    // Sintassi: metodo che accede al valore del form
    // Semantica: stampa l’intero stato corrente del form
    console.log(this.frm.value);
  }


  stampaCognome() {
    // per "raggiungere" un elemento interno al FormGroup
    // si utilizza il metodo get
    alert(this.frm.get('cognome')!.value);
  }


  setIndirizzo() {
    // Sintassi: metodo che usa setValue su sotto-FormGroup indirizzo
    // Semantica: imposta tutti i valori del gruppo indirizzo
    this.getIndirizzo().setValue({
      via: 'Via del corso',
      civico: '20',
    });
  }

  // Sintassi: metodo helper che fa cast a FormGroup
  // Semantica: restituisce il sotto-gruppo indirizzo per manipolazioni
  getIndirizzo() {
    return this.frm.get('indirizzo') as FormGroup;
  }
}
