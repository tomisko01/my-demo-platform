import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {JsonPipe} from "@angular/common";
import {createPasswordStrengthValidator} from "../../components/password-strength/password-strength.validator";

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatFormField,
    MatInput,
    MatButton,
    ReactiveFormsModule,
    JsonPipe
  ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  email = new FormControl('', {
    validators: [Validators.required, Validators.email],
    updateOn: 'blur'
  })

  form = new FormGroup({
    email: this.email,
    password: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(8),
        createPasswordStrengthValidator()
      ]
    }),
  })

}
