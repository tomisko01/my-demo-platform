import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable, shareReplay, tap} from "rxjs";
import {User} from "@angularTopic/signal/signal-login/model/user.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../environments/environment";


const AUTH_DATA = "auth_data"

@Injectable({
  providedIn: 'root'
})
export class ReactiveAuthStoreService {

  private subject = new BehaviorSubject<User | null>(null)
  user$: Observable<User | null> = this.subject.asObservable()

  isLoggedIn$: Observable<boolean> = this.user$.pipe(
    map(user => !!user),
  )
  isLoggedOut$: Observable<boolean> = this.isLoggedIn$.pipe(
    map(value => !value)
  )

  httpClient = inject(HttpClient)

  constructor() {
    const user = localStorage.getItem(AUTH_DATA)
    if(user) {
      this.subject.next(JSON.parse(user))
    }
  }

  login(email: string, password: string): Observable<User> {
    return this.httpClient.post<User>(`${environment.apiRoot}/login`, {email, password}).pipe(
      tap(user => {
        this.subject.next(user)
        localStorage.setItem(AUTH_DATA, JSON.stringify(user))
      }),
      shareReplay()
    )
  }

  logout(): void {
    localStorage.removeItem(AUTH_DATA)
    this.subject.next(null)
  }
}
