import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control.component',
  standalone: false,
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.scss',
})
export class FormControlComponent {

  // Un form control è un QUALSIASI controllo di un form
  nome = new FormControl("")

  stampaNome() {
    alert(`Hai digitato ${this.nome.value}`);
  }

  cambiaNome() {
    this.nome.setValue('Luigi');
  }
}
