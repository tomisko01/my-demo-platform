import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";

@Component({
  selector: 'app-radio-group',
  standalone: true,
  imports: [
    MatRadioGroup,
    ReactiveFormsModule,
    MatRadioButton
  ],
  templateUrl: './radio-group.component.html',
  styleUrl: './radio-group.component.css'
})
export class RadioGroupComponent {
  formBuilder = inject(FormBuilder)

  form = this.formBuilder.group({
    type: ['Reusable', Validators.required]
  })

}
