import {Component, inject} from '@angular/core';
import {ReactiveAuthStoreService} from "@angularTopic/reactive/service/reactive-auth-store.service";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ReactiveMessagesService} from "@angularTopic/reactive/service/reactive-messages.service";
import {RouterLink} from "@angular/router";
import {AsyncPipe} from "@angular/common";
import {
  ReactiveMessagesComponent
} from "@angularTopic/reactive/component/reactive-messages/reactive-messages.component";

@Component({
  selector: 'app-authenticate-with-observable',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    AsyncPipe,
    ReactiveMessagesComponent
  ],
  templateUrl: './authenticate-with-observable.component.html',
  styleUrl: './authenticate-with-observable.component.css'
})
export class AuthenticateWithObservableComponent {

  authStore = inject(ReactiveAuthStoreService)
  messages = inject(ReactiveMessagesService)

  fb = inject(FormBuilder)

  form = this.fb.group({
    email: [''],
    password: [''],
  })

  onLogin(){
    const {email, password} = this.form.value
    if (!email || !password) {
      this.messages.showErrors(`Enter mail and/or password`)
      return
    }
    this.authStore.login(email, password)
      .subscribe()

  }


}
