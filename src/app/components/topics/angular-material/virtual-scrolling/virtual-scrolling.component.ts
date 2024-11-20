import { Component } from '@angular/core';
import {MatList, MatListItem} from "@angular/material/list";
import {NgForOf} from "@angular/common";
import {CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport} from "@angular/cdk/scrolling";

@Component({
  selector: 'app-virtual-scrolling',
  standalone: true,
  imports: [
    MatList,
    MatListItem,
    NgForOf,
    CdkVirtualScrollViewport,
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf
  ],
  templateUrl: './virtual-scrolling.component.html',
  styleUrl: './virtual-scrolling.component.css'
})
export class VirtualScrollingComponent {

  items = Array.from({length:20000}).map((item, i) => `Item #${i}`)

}
