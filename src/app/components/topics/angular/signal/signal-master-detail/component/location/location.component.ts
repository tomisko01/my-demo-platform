import {Component, ElementRef, inject, OnInit, signal, viewChild} from '@angular/core';
import {elden} from "../../../../../../../typings";
import {EldenLocationService} from "@angularTopic/signal/signal-crud/service/elden-location.service";
import {MatButton} from "@angular/material/button";
import {MessagesComponent} from "@angularTopic/signal/signal-crud/messages/messages.component";
import {MatTooltip} from "@angular/material/tooltip";
import {
  LocationDetailComponent
} from "@angularTopic/signal/signal-master-detail/component/location-detail/location-detail.component";
import {update} from "lodash-es";

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [
    MatButton,
    MessagesComponent,
    MatTooltip,
    LocationDetailComponent
  ],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent implements OnInit {
  mode = signal<'master' | 'detail'>("master")

  locations = signal<elden.Location[]>([])

  selectedLocation = signal<elden.Location | null>(null)

  locationService = inject(EldenLocationService)

  searchInput = viewChild.required<ElementRef>('search')

  messagesComponent = viewChild<MessagesComponent>(MessagesComponent)

  matTooltipDirective = viewChild(MessagesComponent,
    {
      read: MatTooltip
    })

  ngOnInit(): void {
    console.log(`messagesComponent as signal viewChild: `, this.messagesComponent())
    console.log(`matTooltipDirective on messagesComponent as signal viewChild: `, this.matTooltipDirective())
  }

  async onSearch() {

    const query = this.searchInput()?.nativeElement.value

    console.log(`search query: `, query)

    const results = await this.locationService.loadLocations({query})

    this.locations.set(results)
  }

  onLocationSelected(location: elden.Location) {
    this.mode.set('detail')
    this.selectedLocation.set(location)

  }

  onCancel() {
    this.mode.set('master')
  }

  onLocationUpdated(updatedLocation: elden.Location) {
    this.locations.update(locations =>
      locations.map(location => location.id === updatedLocation.id ? updatedLocation : location))
  }
}
