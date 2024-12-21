import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatError, MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {
  MatDatepickerModule,
  MatDatepickerToggle,
  MatDateRangeInput,
  MatDateRangePicker
} from "@angular/material/datepicker";
import {eventDateRangeValidator} from "../../../../components/date-range-validator/date-range.validator";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-advanced-form-step2',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatRadioGroup,
    MatRadioButton,
    MatFormField,
    MatInput,
    MatDateRangeInput,
    MatLabel,
    MatDateRangePicker,
    MatDatepickerToggle,
    MatDatepickerModule,
    MatSuffix,
    NgIf,
    MatError
  ],
  templateUrl: './advanced-form-step2.component.html',
  styleUrl: './advanced-form-step2.component.css'
})
export class AdvancedFormStep2Component {

  fb = inject(FormBuilder)

  form = this.fb.group({
    gameType: ['OFFLINE'],
    quantity: [null, [
      Validators.required,
      Validators.min(1),
      Validators.max(999),
      Validators.pattern("[0-9]+")
    ]],
    eventStart: [null],
    eventEnd: [null],
  }, {
    validators: [eventDateRangeValidator()],
    updateOn: 'blur'
  })

  constructor() {
    this.form.valueChanges.subscribe(
      val => {
        const quantityControl = this.form.controls['quantity']

        if (val.gameType === 'OFFLINE' && quantityControl.enabled) {
          quantityControl.disable({emitEvent: false}) //no trigger valueChange of form
        } else if (val.gameType === 'ONLINE' && quantityControl.disabled) {
          quantityControl.enable({emitEvent: false})
        }
      }
    )
  }
}
