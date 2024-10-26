import {AfterViewInit, Component, inject, signal, ViewChild} from '@angular/core';
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
import {getLocaleFirstDayOfWeek, NgIf} from "@angular/common";
import {MatDivider} from "@angular/material/divider";
import {MatPaginator} from "@angular/material/paginator";
import {merge, tap} from "rxjs";
import {MatSort, MatSortHeader} from "@angular/material/sort";
import {SelectionModel} from "@angular/cdk/collections";
import {MatCheckbox} from "@angular/material/checkbox";

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
    NgIf,
    MatDivider,
    MatPaginator,
    MatSort,
    MatSortHeader,
    MatCheckbox
  ],
  templateUrl: './elden-view-item.component.html',
  styleUrl: './elden-view-item.component.css'
})
export class EldenViewItemComponent implements AfterViewInit {

  @ViewChild(MatPaginator)
  paginator: MatPaginator

  @ViewChild(MatSort)
  sort: MatSort

  item = signal<elden.Item | null>(null)
  locations = signal<elden.Location[]>([])
  locationsByPages = signal<elden.Location[]>([])
  loading = signal<Boolean>(false)
  expandedLocation = signal<elden.Item | null>(null)

  selection = new SelectionModel<elden.Location>(true, [])
  route = inject(ActivatedRoute)
  locationService = inject(EldenLocationService)

  displayedColumns = ['name', 'region', 'description']
  displayedColumnsWithSelection = ['select', ...this.displayedColumns]

  constructor() {
    this.item.set(this.route.snapshot.data['item'])
    this.locations.set(this.route.snapshot.data['locations'])

    this.loadLocationsPage()
  }

  ngAfterViewInit(): void {
    merge(
      this.sort.sortChange,
      this.paginator.page
    ).pipe(
      tap(() => this.loadLocationsPage())
    ).subscribe()
  }

  onToggleLocation(location: elden.Item) {
    if (location.id === this.expandedLocation()?.id) {
      this.expandedLocation.set(null)
    } else {
      this.expandedLocation.set(location)
    }
  }

  private async loadLocationsPage() {
    this.loading.set(true)
    const locations = await this.locationService.findLocations(
      this.sort?.direction ?? 'asc',
      this.paginator?.pageIndex ?? 0,
      this.paginator?.pageSize ?? 3,
      this.sort?.active ?? "name")
    this.locationsByPages.set(locations)
    this.loading.set(false);
  }

  onLocationToggled(location: elden.Location) {
    this.selection.toggle(location)
    console.log(this.selection.selected)
  }

  isAllSelected(): boolean {
    return this.selection.selected.length === this.locationsByPages().length
  }

  toggleAllSelection() {
    if(this.isAllSelected()){
      this.selection.clear()
    } else {
      this.selection.select(...this.locationsByPages())
    }
  }
}
