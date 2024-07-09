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

  // Will always be updated after counter() update
  derivedCounter = computed(() => {
      const counter = this.counter()
      return 10 * counter
  })

  // Will be updated only when previous compute called counter()
  derivedCounterWithCondition = computed(() => {
    if (this.multiplier % 2 == 0) {
      const counter = this.counter()
      return 10 * counter
    }
    return 0
  })

  // Will always be updated after counter() update, because we always check counter()
  fixedDerivedCounterWithCondition = computed(() => {
    const counter = this.counter()
    if (this.multiplier % 2 == 0) {
      return 10 * counter
    }
    return 0
  })

  multiplier = 0

  item = signal({
    id: 1,
    name: 'Ameno'
  })

  increment() {
    // this.counter.set(this.counter() + 1)

    // DO NOT USE IT IN THAT WAY:
    // LOSING EVERY BENEFIT FROM SIGNALS
    // WORKING ONLY FOR DEFAULT CHANGE DETECTION
    this.item().name = 'Dorime'

    // UPDATE VALUE WITH SET() OR UPDATE() FUNCTIONS
    this.item.update(data => ({...data, name: 'DORIME'}))

    this.counter.update(currentValue => ++currentValue)
  }

  incrementMultiplier() {
    this.multiplier++
  }
}
