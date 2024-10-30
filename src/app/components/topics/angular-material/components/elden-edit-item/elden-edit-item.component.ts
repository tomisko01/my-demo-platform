import {Component, inject} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {MatDialogActions, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";

@Component({
  selector: 'app-elden-edit-item',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions
  ],
  templateUrl: './elden-edit-item.component.html',
  styleUrl: './elden-edit-item.component.css'
})
export class EldenEditItemComponent {

  title: string;

  fb = inject(FormBuilder)

}
