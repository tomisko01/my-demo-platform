import {computed, inject, Injectable, signal} from '@angular/core';
import {User} from "@angularTopic/signal/signal-login/model/user.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../../environments/environment";
import {firstValueFrom} from "rxjs";


const USER_STORAGE_KEY = 'user';

@Injectable({
  providedIn: 'root'
})
export class LoginSignalService {

  #userSignal = signal<User | null>(null)

  user = this.#userSignal.asReadonly()

  isLoggedIn = computed(() => !!this.user())

  http = inject(HttpClient)

  constructor() {
  }

  async login(email: string, password: string): Promise<User> {
    const login$ = this.http.post<User>(`${environment.apiRoot}/login`, {email, password})

    const user = await firstValueFrom(login$)

    this.#userSignal.set(user)

    return user
  }

  logout() {
    this.#userSignal.set(null)
  }
}
