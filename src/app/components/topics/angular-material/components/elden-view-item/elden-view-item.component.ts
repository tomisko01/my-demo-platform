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
import {EldenLocationService} from "@angularTopic/signal/signal-crud/service/elden-location.service";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {NgIf} from "@angular/common";

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
    MatHeaderRowDef,
    MatProgressSpinner,
    NgIf
  ],
  templateUrl: './elden-view-item.component.html',
  styleUrl: './elden-view-item.component.css'
})
export class EldenViewItemComponent {

  item = signal<elden.Item | null>(null)

  locations = signal<elden.Location[]>([])
  locationsByPages = signal<elden.Location[]>([])

  loading = signal<Boolean>(false);

  route = inject(ActivatedRoute)
  locationService = inject(EldenLocationService)

  displayedColumns = ['name', 'region', 'description']

  constructor() {
    this.item.set(this.route.snapshot.data['item'])
    this.locations.set(this.route.snapshot.data['locations'])

    this.loadLocationsPage()
  }

  private async loadLocationsPage() {
    this.loading.set(true)
    const locations = await this.locationService.findLocations('asc', 0, 3)
    this.locationsByPages.set(locations)
    this.loading.set(false);
  }
}
