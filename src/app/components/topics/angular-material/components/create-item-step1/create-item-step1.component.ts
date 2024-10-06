import {Component, inject} from '@angular/core';
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatError, MatFormField, MatHint, MatLabel, MatPrefix, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";

@Component({
  selector: 'app-create-item-step1',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatPrefix,
    MatSuffix,
    MatHint,
    NgIf,
    MatError,
    MatRadioGroup,
    MatRadioButton
  ],
  templateUrl: './create-item-step1.component.html',
  styleUrl: './create-item-step1.component.css'
})
export class CreateItemStep1Component {

  formBuilder = inject(FormBuilder)

  form = this.formBuilder.group({
    name: ['', [
      Validators.required,
      Validators.minLength(3)
    ]],
    description: ['',
      Validators.required,
    ],
    effect: [''],
    type: ['Reusable', Validators.required]
  })

  get itemName(){
    return this.form.controls['name'];
  }
}
