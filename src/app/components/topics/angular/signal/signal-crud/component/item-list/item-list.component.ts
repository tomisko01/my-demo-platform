import {Component, input} from '@angular/core';
import {elden} from "../../../../../../../typings";
import {MatButton, MatFabButton, MatIconButton, MatMiniFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [
    MatButton,
    MatFabButton,
    MatIcon,
    MatIconButton,
    MatMiniFabButton
  ],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {

  items = input.required<elden.Item[]>()

  // signal input  with initial value []
  // items = input<elden.Item[]>([])
}
