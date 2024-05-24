import { Injectable } from '@angular/core';

let counter: number = 100;
@Injectable()
export class MySecondService {

  constructor() {
    console.log('MySecondService constructor for ' + counter++ + ' time');
  }
}
