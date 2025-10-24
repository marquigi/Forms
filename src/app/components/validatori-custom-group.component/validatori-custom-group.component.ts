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
  tipo_input: 'text' | 'password' = 'password';

  // FormGroup che rappresenta 2 password con validatore custom
  frm = new FormGroup(
    {
      p1: new FormControl(''),
      // Campo password
      p2: new FormControl(''),
      // Campo conferma password
    },
    (a: AbstractControl) => {
      const val1 = a.get('p1')!.value;
      // Valore della password
      const val2 = a.get('p2')!.value;
      // Valore della seconda password
      // Se il primo campo è vuoto => errore
      if (val1.length === 0) {
        return { no_p1: 'Inserisci una password valida' };
      }
      // Se i valori non coincidono => errore mismatch
      if (val1 !== val2) {
        return { mismatch: 'Le password non coincidono' };
      }
      // Se tutto ok, nessun errore
      return null;
    }
  );

  // Metodo per mostrare la password per 1 secondo
  showPassword() {
    this.tipo_input = 'text';
    // Cambio input per mostrare testo
    setTimeout(() => {
      this.tipo_input = 'password';
      // Torno a nascondere la password
    }, 1000);
  }
}
