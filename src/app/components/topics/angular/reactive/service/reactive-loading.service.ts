import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReactiveLoadingService {

  loading$: Observable<boolean>


  constructor() { }

  showLoaderUntilCompleted<T>(obs$: Observable<T>): Observable<T> {
    return obs$
  }

  loadingOn() {

  }

  loadingOff(){

  }
}
