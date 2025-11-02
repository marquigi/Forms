import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-validatori-custom-group',
  standalone: false,
  templateUrl: './validatori-custom-group.component.html',
  styleUrl: './validatori-custom-group.component.scss',
})
export class ValidatoriCustomGroupComponent {
  // Usato per mostrare o nascondere la password
  // Sintassi: tipo_input è una variabile di tipo letterale union 'text' | 'password'
  // Semantica: determina il tipo dell'input password per mostrare o nascondere il testo
  tipo_input: 'text' | 'password' = 'password';

  // FormGroup che rappresenta 2 password con validatore custom
  // Sintassi: frm è un FormGroup con due FormControl e un validatore custom a livello di gruppo
  // Semantica: gestisce i valori delle due password e valida che siano non vuote e corrispondenti
  frm = new FormGroup(
    {
      // Sintassi: definizione del FormControl p1 senza valore iniziale
      // Semantica: campo password principale da validare come non vuoto
      p1: new FormControl(''),
      // Campo password
      // Sintassi: definizione del FormControl p2 senza valore iniziale
      // Semantica: campo conferma password che deve corrispondere a p1
      p2: new FormControl(''),
      // Campo conferma password
    },
    // Sintassi: validatore custom di tipo ValidatorFn che prende un AbstractControl e ritorna errori o null
    // Semantica: verifica che p1 non sia vuoto e che p1 e p2 coincidano, altrimenti ritorna errori specifici
    (a: AbstractControl) => {
      // Sintassi: recupero valore del controllo p1 dal gruppo
      // Semantica: ottengo la password principale per la validazione
      const val1 = a.get('p1')!.value;
      // Valore della password
      // Sintassi: recupero valore del controllo p2 dal gruppo
      // Semantica: ottengo la password di conferma per la validazione
      const val2 = a.get('p2')!.value;
      // Valore della seconda password
      // Se il primo campo è vuoto => errore
      // Sintassi: controllo lunghezza stringa val1 per validare presenza password
      // Semantica: se p1 è vuoto, ritorno errore no_p1 con messaggio
      if (val1.length === 0) {
        return { no_p1: 'Inserisci una password valida' };
      }
      // Se i valori non coincidono => errore mismatch
      // Sintassi: confronto stringhe val1 e val2 per validare corrispondenza
      // Semantica: se p1 e p2 sono diversi, ritorno errore mismatch con messaggio
      if (val1 !== val2) {
        return { mismatch: 'Le password non coincidono' };
      }
      // Se tutto ok, nessun errore
      // Sintassi: ritorno null per indicare validazione superata
      // Semantica: non ci sono errori di validazione sulle password
      return null;
    }
  );

  // Metodo per mostrare la password per 1 secondo
  // Sintassi: metodo showPassword che modifica tipo_input e usa setTimeout
  // Semantica: temporaneamente mostra il testo della password per 1 secondo, poi lo nasconde
  showPassword() {
    this.tipo_input = 'text';
    // Cambio input per mostrare testo
    setTimeout(() => {
      this.tipo_input = 'password';
      // Torno a nascondere la password dopo un secondo
    }, 1000);
  }
}
