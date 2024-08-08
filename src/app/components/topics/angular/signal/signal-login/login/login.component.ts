import {Component, inject} from '@angular/core';
import {RouterLink} from "@angular/router";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MessagesService} from "@angularTopic/signal/signal-crud/messages/messages.service";
import {LoginSignalService} from "@angularTopic/signal/signal-login/service/login-signal.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  fb = inject(FormBuilder)

  form = this.fb.group({
    email: [''],
    password: [''],
  })

  messagesService = inject(MessagesService)

  loginService = inject(LoginSignalService)

  async onLogin() {
    try {
      const {email, password} = this.form.value
      if (!email || !password) {
        this.messagesService.showMessage(`Enter mail and password`, 'error')
        return
      }
      await this.loginService.login(email, password)
    } catch (e) {
      console.error(e)
      this.messagesService.showMessage(`Login failed, please try again`, 'error')
    }
  }
}
