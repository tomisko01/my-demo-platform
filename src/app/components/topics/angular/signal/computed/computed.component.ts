import {Component, computed, signal} from '@angular/core';
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-computed',
  standalone: true,
  imports: [
    MatDivider
  ],
  templateUrl: './computed.component.html',
  styleUrl: './computed.component.css'
})
export class ComputedComponent {

  counter = signal(0)

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

  increment() {
    this.counter.update(currentValue => ++currentValue)
  }

  incrementMultiplier() {
    this.multiplier++
  }
}
