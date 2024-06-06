import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-on-init-hook',
  templateUrl: './on-init-hook.component.html',
  styleUrl: './on-init-hook.component.css'
})
export class OnInitHookComponent implements OnInit{

  objectToPass: any = {
    id: 'id01',
    name: 'Ameno',
    description: 'Dorime'
  }

  constructor() {
    console.log('Parent - constructor');
  }

  ngOnInit(): void { //we shouldn't call this method directly, leave it to angular
    console.log('Parent - ngOnInit');
  }

}
