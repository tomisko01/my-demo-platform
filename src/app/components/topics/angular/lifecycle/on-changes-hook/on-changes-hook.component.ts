import {Component} from '@angular/core';

@Component({
  selector: 'app-on-changes-hook',
  templateUrl: './on-changes-hook.component.html',
  styleUrl: './on-changes-hook.component.css'
})
export class OnChangesHookComponent {

  objectToPass: any = {
    id: 'id01',
    name: 'Ameno',
    description: 'Dorime'
  }

  counter: number = 0;

  changeObject() {
    this.objectToPass = {...this.objectToPass, id: 'id01-update-' + this.counter++};
  }
}
