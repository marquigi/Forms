import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestione-errori',
  standalone: false,
  templateUrl: './gestione-errori.component.html',
  styleUrl: './gestione-errori.component.scss',
})
export class GestioneErroriComponent {
  msg = new FormControl('', Validators.maxLength(20));
  nome = new FormControl('', [Validators.required, Validators.minLength(2)]);

}