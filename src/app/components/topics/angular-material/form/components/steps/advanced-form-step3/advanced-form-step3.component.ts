import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {MatMiniFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption, MatSelect} from "@angular/material/select";

@Component({
  selector: 'app-advanced-form-step3',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatMiniFabButton,
    MatIcon,
    MatFormField,
    MatInput,
    MatLabel,
    MatSelect,
    MatOption
  ],
  templateUrl: './advanced-form-step3.component.html',
  styleUrl: './advanced-form-step3.component.css'
})
export class AdvancedFormStep3Component {

  fb = inject(FormBuilder)

  form = this.fb.group({})
  }
