import {Component, inject, input, output} from '@angular/core';
import {elden} from "../../../../../../../typings";
import {EldenLocationService} from "@angularTopic/signal/signal-crud/service/elden-location.service";
import {MessagesService} from "@angularTopic/signal/signal-crud/messages/messages.service";

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

  locationService = inject(EldenLocationService)
  messagesService = inject(MessagesService)

  async onSave(description: string) {
    try {
      const location = this.location()
      const updatedLocation = await this.locationService.saveLocation(location!.id, {description})
      this.locationUpdated.emit(updatedLocation)
    } catch (err) {
      console.log(err)
      this.messagesService.showMessage(`Error saving location!`,
        'error')
    }
  }

  onCancel() {
    this.cancel.emit()
  }
}
