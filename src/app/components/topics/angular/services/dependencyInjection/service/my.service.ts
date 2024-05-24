import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

let counter: number = 0;

@Injectable()
export class MyService {

  constructor(private http: HttpClient) {
    console.log('create MyService for: ' + counter++ + ' time');
  }
}
