import {Component, input} from '@angular/core';
import {elden} from "../../../../../../../typings";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {

  items = input.required<elden.Item[]>()

  // signal input  with initial value []
  // items = input<elden.Item[]>([])

  //todo style for buttons1111111111111111

}
