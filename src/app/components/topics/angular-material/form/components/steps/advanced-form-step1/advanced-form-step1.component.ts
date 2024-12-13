import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField, MatHint} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-advanced-form-step1',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatHint
  ],
  templateUrl: './advanced-form-step1.component.html',
  styleUrl: './advanced-form-step1.component.css'
})
export class AdvancedFormStep1Component {

  fb = inject(FormBuilder)

  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)], Validators.maxLength(60)]
  })

}
