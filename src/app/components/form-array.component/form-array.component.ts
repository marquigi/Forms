import { Component } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array.component',
  standalone: false,
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.scss',
})
export class FormArrayComponent {

  // FormArray di formControl
  hobbies = new FormArray<FormControl>([])

  ngOnInit() {
    this.addHobby();
    // NOTA

  }

  addHobby() {
    this.hobbies.push(
      new FormControl('', [Validators.required, Validators.minLength(2)])
    ) // NOTA
  }

  getHobbiesControls() {
    return this.hobbies.controls; // NOTA 
  }

  deleteHobby(i: number) {
    this.hobbies.removeAt(i);
    // NOTA
  }

  deleteAllHobbies() {
    this.hobbies.clear();
    this.addHobby();
    // NOTA
  }

  deleteInvalidHobbies() {
    this.hobbies.controls = this.hobbies.controls.filter(x => x.valid)
    // NOTA
    this.addHobby();
  }
}
