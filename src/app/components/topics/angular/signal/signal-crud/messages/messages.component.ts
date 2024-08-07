import {Component, inject} from '@angular/core';
import {MessagesService} from "@angularTopic/signal/signal-crud/messages/messages.service";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton, MatMiniFabButton} from "@angular/material/button";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [
    MatIcon,
    MatMiniFabButton,
    NgClass,
    MatIconButton
  ],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {

  messageService = inject(MessagesService)

  message = this.messageService.message

  onClose() {
    this.messageService.clear()
  }
}
