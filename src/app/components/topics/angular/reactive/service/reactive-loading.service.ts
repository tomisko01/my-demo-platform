import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReactiveLoadingService {

  private loadingSubject = new BehaviorSubject<boolean>(false)

  loading$: Observable<boolean> = this.loadingSubject.asObservable()

  constructor() {
  }

  showLoaderUntilCompleted<T>(obs$: Observable<T>): Observable<T> {
    return obs$
  }

  loadingOn() {
    this.loadingSubject.next(true)
  }

  loadingOff() {
    this.loadingSubject.next(false)
  }
}
