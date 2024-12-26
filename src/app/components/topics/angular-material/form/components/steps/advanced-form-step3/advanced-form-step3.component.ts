import {Component, inject} from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-advanced-form-step3',
  standalone: true,
  imports: [],
  templateUrl: './advanced-form-step3.component.html',
  styleUrl: './advanced-form-step3.component.css'
})
export class AdvancedFormStep3Component {

  fb = inject(FormBuilder)

  form = this.fb.group({})
  }
