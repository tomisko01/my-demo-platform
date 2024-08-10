import {computed, effect, inject, Injectable, signal} from '@angular/core';
import {User} from "@angularTopic/signal/signal-login/model/user.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../../environments/environment";
import {firstValueFrom} from "rxjs";


const USER_STORAGE_KEY = 'user'

@Injectable({
  providedIn: 'root'
})
export class LoginSignalService {

  #userSignal = signal<User | null>(null)

  user = this.#userSignal.asReadonly()

  isLoggedIn = computed(() => !!this.user())

  http = inject(HttpClient)

  constructor() {
    this.loadUserFromStorage()

    effect(() => {
      const user = this.user()
      if (user) {
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user))
      }
    })
  }

  loadUserFromStorage() {
    const json = localStorage.getItem(USER_STORAGE_KEY)

    if (json) {
      const user = JSON.parse(json)
      this.#userSignal.set(user)
    }
  }

  async login(email: string, password: string): Promise<User> {
    const login$ = this.http.post<User>(`${environment.apiRoot}/login`, {email, password})

    const user = await firstValueFrom(login$)

    this.#userSignal.set(user)

    return user
  }

  logout() {
    localStorage.removeItem(USER_STORAGE_KEY)
    this.#userSignal.set(null)
  }
}
