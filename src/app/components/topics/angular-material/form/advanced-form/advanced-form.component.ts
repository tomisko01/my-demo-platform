import { Component } from '@angular/core';
import {MatStep, MatStepLabel, MatStepper, MatStepperNext} from "@angular/material/stepper";
import {AdvancedFormStep1Component} from "../components/steps/advanced-form-step1/advanced-form-step1.component";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-advanced-form',
  standalone: true,
  imports: [
    MatStepper,
    MatStepLabel,
    AdvancedFormStep1Component,
    MatButton,
    MatStepperNext,
    MatStep
  ],
  templateUrl: './advanced-form.component.html',
  styleUrl: './advanced-form.component.css'
})
export class AdvancedFormComponent {

}
