import { Component } from '@angular/core';
import {LocationComponent} from "@angularTopic/signal/signal-master-detail/component/location/location.component";

@Component({
  selector: 'app-signal-master-detail',
  standalone: true,
  imports: [
    LocationComponent
  ],
  templateUrl: './signal-master-detail.component.html',
  styleUrl: './signal-master-detail.component.css'
})
export class SignalMasterDetailComponent {

}
