import {Component, Input} from '@angular/core';
import {elden} from "../../../../../../typings";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardLgImage,
  MatCardTitle
} from "@angular/material/card";

@Component({
  selector: 'app-item-card-list-observable',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardImage,
    MatCardLgImage,
    MatCardContent,
    MatCardTitle
  ],
  templateUrl: './item-card-list-observable.component.html',
  styleUrl: './item-card-list-observable.component.css'
})
export class ItemCardListObservableComponent {

  @Input()
  items: elden.Item[]=[];
}
