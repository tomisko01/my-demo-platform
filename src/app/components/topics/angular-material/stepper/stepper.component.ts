import { Component } from '@angular/core';
import {MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious} from "@angular/material/stepper";
import {CreateItemStep1Component} from "../components/create-item-step1/create-item-step1.component";
import {CreateItemStep2Component} from "../components/create-item-step2/create-item-step2.component";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [
    MatStepper,
    MatStep,
    MatStepLabel,
    CreateItemStep1Component,
    CreateItemStep2Component,
    MatButton,
    MatStepperNext,
    MatStepperPrevious
  ],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css'
})
export class StepperComponent {

}
