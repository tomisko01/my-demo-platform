import {Component, inject, signal} from '@angular/core';
import {EldenLocationService} from "@angularTopic/signal/signal-crud/service/elden-location.service";
import {elden} from "../../../../typings";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-drag-and-drop',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './drag-and-drop.component.html',
  styleUrl: './drag-and-drop.component.css'
})
export class DragAndDropComponent {

  locationService = inject(EldenLocationService)
  locations = signal<elden.Location[]>([])

  constructor() {
    this.loadLocations()
  }

  private async loadLocations() {
    const allLocations = await  this.locationService.loadLocations({})
    this.locations.set(allLocations)
  }

}
