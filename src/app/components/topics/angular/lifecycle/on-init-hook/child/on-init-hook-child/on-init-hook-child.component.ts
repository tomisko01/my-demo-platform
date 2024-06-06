import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-on-init-hook-child',
  templateUrl: './on-init-hook-child.component.html',
  styleUrl: './on-init-hook-child.component.css'
})
export class OnInitHookChildComponent implements OnInit {

  @Input()
  object: any;

  constructor() {
    console.log('Child - constructor');
    console.log('input property: ', this.object); // undefined
  }

  ngOnInit(): void {
    //best place for initialization logic
    console.log('Child - ngOnInit');
    console.log('input property: ', this.object); // resolved object
  }

}
