import {Component, Input, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-on-destroy-hook-child',
  templateUrl: './on-destroy-hook-child.component.html',
  styleUrl: './on-destroy-hook-child.component.css'
})
export class OnDestroyHookChildComponent implements OnDestroy{

  @Input()
  object: any;

  ngOnDestroy(): void {
    console.log('Child - ngOnDestroy');
  }


}
