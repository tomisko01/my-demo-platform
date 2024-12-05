import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatError, MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {FormsModule, NgForm} from "@angular/forms";
import {JsonPipe, NgIf} from "@angular/common";
import {PasswordStrengthDirective} from "../../components/password-strength/password-strength.directive";
import {OnlyOneErrorPipe} from "../../components/only-one-error/only-one-error.pipe";

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatFormField,
    MatInput,
    MatButton,
    FormsModule,
    MatError,
    NgIf,
    JsonPipe,
    PasswordStrengthDirective,
    OnlyOneErrorPipe
  ],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {

  val = {
    email: "example@mail.com"
  }

  onLogin(loginForm: NgForm, $event: any) {
    console.log(loginForm.value, loginForm.valid, $event)
  }

  onEmailModelChange($event: any) {
    console.log($event)
  }
}
