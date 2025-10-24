import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-validatori-custom-group',
  standalone: false,
  templateUrl: './validatori-custom-group.component.html',
  styleUrl: './validatori-custom-group.component.scss',
})
export class ValidatoriCustomGroupComponent {
  tipo_input: 'text' | 'password' = 'password';

  frm = new FormGroup(
    {
      p1: new FormControl(''),
      p2: new FormControl(''),
    },
    (a: AbstractControl) => {
      const val1 = a.get('p1')!.value;
      const val2 = a.get('p2')!.value;
      if (val1.length === 0) {
        return { no_p1: 'Inserisci una password valida' };
      }
      if (val1 !== val2) {
        return { mismatch: 'Le password non coincidono' };
      }
      return null;
    }
  );

  showPassword() {
    this.tipo_input = 'text';
    setTimeout(() => {
      this.tipo_input = 'password';
    }, 1000);
  }
}
