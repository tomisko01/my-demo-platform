import {Component, inject} from '@angular/core';
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatError, MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {JsonPipe, NgIf} from "@angular/common";
import {createPasswordStrengthValidator} from "../../components/password-strength/password-strength.validator";
import {OnlyOneErrorPipe} from "../../components/only-one-error/only-one-error.pipe";

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
    JsonPipe,
    MatError,
    NgIf,
    OnlyOneErrorPipe
  ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  formBuilder = inject(FormBuilder)

  /*email = new FormControl('', {
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
  })*/
  form = this.formBuilder.group({
    email: this.formBuilder.nonNullable.control('', {
      validators: [Validators.required, Validators.email],
      updateOn: 'blur'
    }),
    password: ['', [
      Validators.required,
      Validators.minLength(8),
      createPasswordStrengthValidator()
    ]]
  })

  get email() {
    return this.form.controls['email']
  }

  get password(){
    return this.form.controls['password']
  }

  resetForm() {
    this.form.reset()
  }
}
