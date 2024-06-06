import {Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-on-destroy-hook',
  templateUrl: './on-destroy-hook.component.html',
  styleUrl: './on-destroy-hook.component.css'
})
export class OnDestroyHookComponent implements OnDestroy{

  objectToPass: any = {
    id: 'id01',
    name: 'Ameno',
    description: 'Dorime'
  }

  destroyChild() {
    this.objectToPass = {};
  }

  ngOnDestroy(): void {
    // should be used very rarely
    console.log('Parent destroyed');
  }
}
