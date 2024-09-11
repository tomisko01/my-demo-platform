import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-reactive-messages',
  standalone: true,
  imports: [
    NgForOf,
    MatIcon,
    NgIf
  ],
  templateUrl: './reactive-messages.component.html',
  styleUrl: './reactive-messages.component.css'
})
export class ReactiveMessagesComponent implements OnInit {

  showMessages = false

  ngOnInit(): void {
  }

  onClose() {
    this.showMessages = false
  }
}
