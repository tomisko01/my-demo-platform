import {Injectable, signal} from '@angular/core';
import {Message, MessageSeverity} from "@angularTopic/signal/signal-crud/messages/messages.model";


@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  #messageSignal = signal<Message | null>(null)

  message = this.#messageSignal.asReadonly()

  constructor() {
  }

  showMessage(text: string, severity: MessageSeverity) {
    this.#messageSignal.set({text, severity})
  }

  clear() {
    this.#messageSignal.set(null)
  }
}
