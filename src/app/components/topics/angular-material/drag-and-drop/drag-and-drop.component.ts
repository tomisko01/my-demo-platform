import {Component, inject} from '@angular/core';
import {EldenLocationService} from "@angularTopic/signal/signal-crud/service/elden-location.service";
import {elden} from "../../../../typings";
import {JsonPipe} from "@angular/common";
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragPlaceholder,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-drag-and-drop',
  standalone: true,
  imports: [
    JsonPipe,
    CdkDropList,
    CdkDrag,
    CdkDragPlaceholder,
    CdkDropListGroup
  ],
  templateUrl: './drag-and-drop.component.html',
  styleUrl: './drag-and-drop.component.css'
})
export class DragAndDropComponent {

  locationService = inject(EldenLocationService)
  locations: elden.Location[] = []
  visitedLocations: elden.Location[] = []

  constructor() {
    this.loadLocations()
  }

  private async loadLocations() {
    this.locations = await this.locationService.loadLocations({})
  }

  drop(event: CdkDragDrop<elden.Location[]>) {
    console.log(`prev index: `, event.previousIndex)
    console.log(`current index: `, event.currentIndex)

    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
  }

  dropMultiList(event: CdkDragDrop<elden.Location[]>) {
    if (event.container === event.previousContainer) {
      this.drop(event)
    }

    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex)
  }
}
