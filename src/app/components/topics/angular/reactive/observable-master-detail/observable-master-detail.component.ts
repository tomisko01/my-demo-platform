import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-observable-master-detail',
  standalone: true,
  imports: [
    MatIcon,
    MatButton,
    MatFormField,
    MatInput
  ],
  templateUrl: './observable-master-detail.component.html',
  styleUrl: './observable-master-detail.component.css'
})
export class ObservableMasterDetailComponent {

}
