import {Component, inject, OnInit} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {ReactiveMessagesService} from "@angularTopic/reactive/service/reactive-messages.service";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-reactive-messages',
  standalone: true,
  imports: [
    NgForOf,
    MatIcon,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './reactive-messages.component.html',
  styleUrl: './reactive-messages.component.css'
})
export class ReactiveMessagesComponent implements OnInit {

  showMessages = false

  reactiveMessageService = inject(ReactiveMessagesService)

  errors$: Observable<string[]> = this.reactiveMessageService.errors$.pipe(
    tap(() => this.showMessages = true),
  )

  ngOnInit(): void {
  }

  onClose() {
    this.showMessages = false
  }
}
