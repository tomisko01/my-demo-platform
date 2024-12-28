import {Component, inject} from '@angular/core';
import {FormArray, FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatMiniFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption, MatSelect} from "@angular/material/select";
import {NgForOf} from "@angular/common";

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
    MatOption,
    NgForOf
  ],
  templateUrl: './advanced-form-step3.component.html',
  styleUrl: './advanced-form-step3.component.css'
})
export class AdvancedFormStep3Component {

  fb = inject(FormBuilder)

  form = this.fb.group({
    locations: this.fb.array([])
  })

  get locations(): FormArray {
    return this.form.controls['locations'] as FormArray
  }

  addLocation() {
    const newLocationForm = this.fb.group({
      name: ['', Validators.required],
      dlc: ['BASE_GAME', Validators.required]
    })

    this.locations.push(newLocationForm)
  }

  deleteLocation(locationIndex: number) {
    this.locations.removeAt(locationIndex)
  }
}
