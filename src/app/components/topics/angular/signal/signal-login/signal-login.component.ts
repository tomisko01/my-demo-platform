import {Component, inject} from '@angular/core';
import {LoginComponent} from "@angularTopic/signal/signal-login/login/login.component";
import {MessagesComponent} from "@angularTopic/signal/signal-crud/messages/messages.component";
import {LoginSignalService} from "@angularTopic/signal/signal-login/service/login-signal.service";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-signal-login',
  standalone: true,
  imports: [
    LoginComponent,
    MessagesComponent,
    MatIconButton,
    MatIcon
  ],
  templateUrl: './signal-login.component.html',
  styleUrl: './signal-login.component.css'
})
export class SignalLoginComponent {

  loginService = inject(LoginSignalService)

  isLoggedIn = this.loginService.isLoggedIn

  onLogout() {
    this.loginService.logout();
  }
}
