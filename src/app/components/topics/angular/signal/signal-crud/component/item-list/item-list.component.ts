import {Component, input} from '@angular/core';
import {elden} from "../../../../../../../typings";

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {

  items = input.required<elden.Item[]>()

  // signal input  with initial value []
  // items = input<elden.Item[]>([])

}
