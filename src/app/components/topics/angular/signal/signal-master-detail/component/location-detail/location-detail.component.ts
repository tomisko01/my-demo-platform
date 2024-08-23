import {Component, input, output} from '@angular/core';
import {elden} from "../../../../../../../typings";

@Component({
  selector: 'app-location-detail',
  standalone: true,
  imports: [],
  templateUrl: './location-detail.component.html',
  styleUrl: './location-detail.component.css'
})
export class LocationDetailComponent {

  location = input.required<elden.Location | null>()

  locationUpdated = output<elden.Location>()
  cancel = output()

  onSave(value: string) {

  }

  onCancel() {
    this.cancel.emit()
  }
}
