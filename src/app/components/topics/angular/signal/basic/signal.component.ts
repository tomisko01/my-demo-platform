import {Component, computed, signal} from '@angular/core';
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [
    MatDivider
  ],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {

  counter = signal(0)

  counterAsReadonly = this.counter.asReadonly()

  item = signal({
    id: 1,
    name: 'Ameno'
  })

  increment() {
    // this.counter.set(this.counter() + 1)
    this.counter.update(currentValue => ++currentValue)

    // DO NOT USE IT IN THAT WAY:
    // LOSING EVERY BENEFIT FROM SIGNALS
    // WORKING ONLY FOR DEFAULT CHANGE DETECTION
    this.item().name = 'Dorime'

    // UPDATE VALUE WITH SET() OR UPDATE() FUNCTIONS
    this.item.update(data => ({...data, name: 'DORIME'}))
  }
}
