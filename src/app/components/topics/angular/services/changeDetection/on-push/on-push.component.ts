import {Component} from '@angular/core';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrl: './on-push.component.css'
})
export class OnPushComponent {

  objectToEdit: any = {
    id: 'id01',
    name: 'Ameno',
    description: 'Dorime'
  }

  onDescChanged(value: string) {
    this.objectToEdit.description = value;
  }

  pushChangesToChild() {
    this.objectToEdit = {...this.objectToEdit, description: 'Interimo adapare!'};
  }
}
