import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";

@Component({
  selector: 'app-advanced-form-step2',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatRadioGroup,
    MatRadioButton
  ],
  templateUrl: './advanced-form-step2.component.html',
  styleUrl: './advanced-form-step2.component.css'
})
export class AdvancedFormStep2Component {

  fb = inject(FormBuilder)

  form = this.fb.group({
    gameType: ['OFFLINE']
  })
}
