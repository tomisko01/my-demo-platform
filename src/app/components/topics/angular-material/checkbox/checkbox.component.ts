import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatCheckbox} from "@angular/material/checkbox";

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatCheckbox
  ],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css'
})
export class CheckboxComponent {

  formBuilder = inject(FormBuilder)

  form = this.formBuilder.group({
    someBooleanValue: [false, Validators.requiredTrue],
    disabledCheckbox: [false],
  })

}
