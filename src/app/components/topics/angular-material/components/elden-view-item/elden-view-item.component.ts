import {Component, inject, signal} from '@angular/core';
import {elden} from "../../../../../typings";
import {ActivatedRoute} from "@angular/router";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardMdImage,
  MatCardTitle
} from "@angular/material/card";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";

@Component({
  selector: 'app-elden-view-item',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatCardMdImage,
    MatCardTitle,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCell,
    MatCellDef,
    MatRow,
    MatRowDef,
    MatHeaderRow,
    MatHeaderRowDef
  ],
  templateUrl: './elden-view-item.component.html',
  styleUrl: './elden-view-item.component.css'
})
export class EldenViewItemComponent {

  item = signal<elden.Item | null>(null)

  locations = signal<elden.Location[]>([])

  route = inject(ActivatedRoute)

  displayedColumns = ['name','region', 'description']

  constructor() {
    this.item.set(this.route.snapshot.data['item'])
    this.locations.set(this.route.snapshot.data['locations'])
  }



}
