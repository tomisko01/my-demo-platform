import {Component, Input} from '@angular/core';
import {elden} from "../../../../../../typings";

@Component({
  selector: 'app-observable-location-detail',
  standalone: true,
  imports: [],
  templateUrl: './observable-location-detail.component.html',
  styleUrl: './observable-location-detail.component.css'
})
export class ObservableLocationDetailComponent {

  @Input()
  location: elden.Location;

}
