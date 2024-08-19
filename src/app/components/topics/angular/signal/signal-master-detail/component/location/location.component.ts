import {Component, inject, signal} from '@angular/core';
import {elden} from "../../../../../../../typings";
import {EldenLocationService} from "@angularTopic/signal/signal-crud/service/elden-location.service";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {

  mode = signal<'master' | 'detail'>("master")

  locations = signal<elden.Location[]>([])

  selectedLocation = signal<elden.Location | null>(null)

  locationService = inject(EldenLocationService)

  onSearch() {

  }
}
