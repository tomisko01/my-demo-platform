import {Component, inject} from '@angular/core';
import {MatError, MatFormField, MatHint, MatLabel, MatPrefix, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-mat-form-input',
  standalone: true,
  imports: [
    MatError,
    MatFormField,
    MatHint,
    MatInput,
    MatLabel,
    MatPrefix,
    MatSuffix,
    ReactiveFormsModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  formBuilder = inject(FormBuilder)

  form = this.formBuilder.group({
    name: ['', [
      Validators.required,
      Validators.minLength(3)
    ]],
  })

  get itemName(){
    return this.form.controls['name'];
  }

}
