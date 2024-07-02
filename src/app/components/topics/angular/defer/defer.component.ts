import { Component } from '@angular/core';
import {DeferChildComponent} from "@angularTopic/defer/child/defer-child/defer-child.component";
import {MatDivider} from "@angular/material/divider";
import {DeferTimerComponent} from "@angularTopic/defer/child/defer-timer/defer-timer.component";

@Component({
  selector: 'app-defer',
  standalone: true,
  imports: [
    DeferChildComponent,
    MatDivider,
    DeferTimerComponent
  ],
  templateUrl: './defer.component.html',
  styleUrl: './defer.component.css'
})
export class DeferComponent {

}
