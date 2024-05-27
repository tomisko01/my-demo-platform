import { Component } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrl: './default.component.css'
})
export class DefaultComponent {

  objectToEdit: any = {
    id: 'id01',
    name: 'Ameno',
    description: 'Dorime'
  }

  onDescChanged(value: string) {
    this.objectToEdit.description = value;
  }
}
