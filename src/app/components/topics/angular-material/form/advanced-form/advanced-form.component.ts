import { Component } from '@angular/core';
import {MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious} from "@angular/material/stepper";
import {AdvancedFormStep1Component} from "../components/steps/advanced-form-step1/advanced-form-step1.component";
import {MatButton} from "@angular/material/button";
import {AdvancedFormStep2Component} from "../components/steps/advanced-form-step2/advanced-form-step2.component";
import {STEPPER_GLOBAL_OPTIONS} from "@angular/cdk/stepper";
import {AdvancedFormStep3Component} from "../components/steps/advanced-form-step3/advanced-form-step3.component";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-advanced-form',
  standalone: true,
  imports: [
    MatStepper,
    MatStepLabel,
    AdvancedFormStep1Component,
    MatButton,
    MatStepperNext,
    MatStep,
    AdvancedFormStep2Component,
    MatStepperPrevious,
    AdvancedFormStep3Component
  ],
  templateUrl: './advanced-form.component.html',
  styleUrl: './advanced-form.component.css',
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class AdvancedFormComponent {

  submit(step1: any, step2: any, step3: any) {
    console.log(step1, step2, step3)
  }
}
