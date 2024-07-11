import {Component, computed, effect, EffectRef, signal} from '@angular/core';
import {MatDivider} from "@angular/material/divider";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-effect',
  standalone: true,
  imports: [
    MatDivider,
    MatButton
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

  effectWithCleanUpReference: EffectRef;

  constructor() {

    // by default effect will be destroyed together with destroy on component
    effect(() => {
      const counterValue = this.counter()
      const derivedCounterValue = this.derivedCounter()
      console.log('Effect log -', `counterValue: ${counterValue}, derivedCounterValue: ${derivedCounterValue}`)
    })

    this.effectWithCleanUpReference = effect((onCleanup) => {

      onCleanup(() => {
        console.log(`Cleanup occurred`)
      })

      const counterValue = this.counter()
      const derivedCounterValue = this.derivedCounter()
      console.log(`Effect with cleanUp log -`, `counterValue: ${counterValue}, derivedCounterValue: ${derivedCounterValue}`)
    }, {
      manualCleanup: true
    })
  }

  increment() {
    this.counter.update(value => value + 1)
  }

  onCleanup() {
    this.effectWithCleanUpReference.destroy()
  }
}
