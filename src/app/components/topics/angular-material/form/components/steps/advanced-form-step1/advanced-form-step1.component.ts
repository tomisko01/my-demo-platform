import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatError, MatFormField, MatHint, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {itemNameValidator} from "../../../../components/item-name-validator/item-name.validator";
import {NgIf} from "@angular/common";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatCheckbox} from "@angular/material/checkbox";

@Component({
  selector: 'app-advanced-form-step1',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatHint,
    MatError,
    NgIf,
    MatDatepickerToggle,
    MatDatepicker,
    MatDatepickerInput,
    MatCheckbox,
    MatLabel,
    MatSuffix
  ],
  templateUrl: './advanced-form-step1.component.html',
  styleUrl: './advanced-form-step1.component.css'
})
export class AdvancedFormStep1Component {

  fb = inject(FormBuilder)

  form = this.fb.group({
    title: ['', {
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60)],
      asyncValidators: [itemNameValidator()],
      updateOn: 'blur'
    }],
    someDate: [new Date(), Validators.required],
    someFlag: [false, Validators.requiredTrue],
    description: ['', [Validators.required]]
  })

  get itemName() {
    return this.form.controls['title']
  }

}
