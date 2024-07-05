import { Component } from '@angular/core';
import {DeferChildComponent} from "@angularTopic/defer/child/defer-child/defer-child.component";
import {MatDivider} from "@angular/material/divider";
import {DeferTimerComponent} from "@angularTopic/defer/child/defer-timer/defer-timer.component";
import {DeferViewportComponent} from "@angularTopic/defer/child/defer-viewport/defer-viewport.component";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-defer',
  standalone: true,
  imports: [
    DeferChildComponent,
    MatDivider,
    DeferTimerComponent,
    DeferViewportComponent,
    MatButton
  ],
  templateUrl: './defer.component.html',
  styleUrl: './defer.component.css'
})
export class DeferComponent {

}
