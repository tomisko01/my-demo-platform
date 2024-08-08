import { Component } from '@angular/core';
import {LoginComponent} from "@angularTopic/signal/signal-login/login/login.component";
import {MessagesComponent} from "@angularTopic/signal/signal-crud/messages/messages.component";

@Component({
  selector: 'app-signal-login',
  standalone: true,
  imports: [
    LoginComponent,
    MessagesComponent
  ],
  templateUrl: './signal-login.component.html',
  styleUrl: './signal-login.component.css'
})
export class SignalLoginComponent {

}
