import {Component, input} from '@angular/core';
import {elden} from "../../../../../typings";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage, MatCardMdImage, MatCardSmImage,
  MatCardTitle
} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-elden-item-card-list',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardImage,
    MatCardContent,
    MatCardActions,
    MatCardTitle,
    MatButton,
    RouterLink,
    MatCardSmImage,
    MatCardMdImage
  ],
  templateUrl: './elden-item-card-list.component.html',
  styleUrl: './elden-item-card-list.component.css'
})
export class EldenItemCardListComponent {

  items = input<elden.Item[]>()


  editItem(item: elden.Item) {

  }
}
