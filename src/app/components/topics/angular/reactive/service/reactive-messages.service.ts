import { Injectable } from '@angular/core';
import {BehaviorSubject, filter, Observable} from "rxjs";

@Injectable()
export class ReactiveMessagesService {

  private subject = new BehaviorSubject<string[]>([])

  errors$: Observable<string[]> = this.subject.asObservable().pipe(
    filter(messages => messages && messages.length > 0),
  )

  constructor() {
    console.log(`Created ReactiveMessagesService`)
  }

  showErrors(...errors: string[]) {
    this.subject.next(errors)
  }
}
