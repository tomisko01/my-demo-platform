import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {
  MatCalendarCellClassFunction,
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle
} from "@angular/material/datepicker";

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatDatepicker,
    MatDatepickerToggle,
    MatSuffix,
    MatDatepickerInput
  ],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.css'
})
export class DatePickerComponent {

  formBuilder = inject(FormBuilder)

  form = this.formBuilder.group({
    someDate: [new Date(), Validators.required],
    anotherDate: [new Date(), Validators.required],
  })

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    const date = cellDate.getDate()
    if (view === "month") {
      return (date === 1) ? "highlight-date" : ""
    }

    return ""
  }

  //todo fix missing styles on first 1 of month
}
