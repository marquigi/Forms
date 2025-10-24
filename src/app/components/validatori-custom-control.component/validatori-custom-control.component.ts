import { Component } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-validatori-custom-control',
  standalone: false,
  templateUrl: './validatori-custom-control.component.html',
  styleUrl: './validatori-custom-control.component.scss',
})
export class ValidatoriCustomControlComponent {
  valoriAmmessi = ['Roma', 'Milano', 'Napoli', 'Firenze'];

  citta = new FormControl('', (a: AbstractControl) => {
    const value: string = a.value;
    if (this.valoriAmmessi.map(c => c.toLowerCase()).includes(value.toLowerCase())) {
      return null;
    }
    return {
      citta_non_valida: `Puoi inserire solo una città tra ${this.valoriAmmessi.join(
        ', '
      )}`,
    };
  });
}