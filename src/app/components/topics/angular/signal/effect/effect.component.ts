import {Component, computed, effect, signal} from '@angular/core';
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-effect',
  standalone: true,
  imports: [
    MatDivider
  ],
  templateUrl: './effect.component.html',
  styleUrl: './effect.component.css'
})
export class EffectComponent {

  counter = signal(0)

  derivedCounter = computed(() => {
    const counter = this.counter()
    return 10 * counter
  })

  constructor() {
    effect(() => {
      const counterValue = this.counter()
      const derivedCounterValue = this.derivedCounter()
      console.log('Effect log -', `counterValue: ${counterValue}, derivedCounterValue: ${derivedCounterValue}`)
    })
  }

  increment(){
    this.counter.update(value => value + 1)
  }
}
