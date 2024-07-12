import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalDataService {

  private counterSignal = signal(0)

  readonly counter = this.counterSignal.asReadonly()

  constructor() {
  }

  incrementCounter() {
    this.counterSignal.update(val => val + 1)
  }

}
