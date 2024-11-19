import { Component } from '@angular/core';
import {MatList, MatListItem} from "@angular/material/list";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-virtual-scrolling',
  standalone: true,
  imports: [
    MatList,
    MatListItem,
    NgForOf
  ],
  templateUrl: './virtual-scrolling.component.html',
  styleUrl: './virtual-scrolling.component.css'
})
export class VirtualScrollingComponent {

  items = Array.from({length:100}).map((item, i) => `Item #${i}`)

}
