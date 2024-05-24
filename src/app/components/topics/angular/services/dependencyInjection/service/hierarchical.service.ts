import { Injectable } from '@angular/core';

let counter: number = 100;
@Injectable()
export class HierarchicalService {

  constructor() {
    console.log('HierarchicalService constructor for ' + counter++ + ' time');
  }
}
