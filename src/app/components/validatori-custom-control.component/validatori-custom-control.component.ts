import { Component } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-validatori-custom-control',
  standalone: false,
  templateUrl: './validatori-custom-control.component.html',
  styleUrl: './validatori-custom-control.component.scss',
})
export class ValidatoriCustomControlComponent {
  // Lista di città valide che si possono inserire
  valoriAmmessi = ['Roma', 'Milano', 'Napoli', 'Firenze'];

  // FormControl con validatore personalizzato
  citta = new FormControl('', (a: AbstractControl) => {
    const value: string = a.value;
    // Prendo il valore inserito dall'utente
    if (this.valoriAmmessi.map(c => c.toLowerCase()).includes(value.toLowerCase())) {
      // Se il valore è tra quelli ammessi ritorno validazione OK
      return null;
    }
    // Se non corrisponde, ritorno errore con messaggio dinamico
    return {
      citta_non_valida: `Puoi inserire solo una città tra ${this.valoriAmmessi.join(
        ', '
      )}`,
    };
  });
}