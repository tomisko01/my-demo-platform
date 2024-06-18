import {Component} from '@angular/core';

@Component({
  selector: 'app-own-pipe',
  templateUrl: './own-pipe.component.html',
  styleUrl: './own-pipe.component.css'
})
export class OwnPipeComponent {

  // type objectCategory    =  'new' | 'old';

  objectList = [
    {
      id: 'id01',
      name: 'id01 with new category',
      category: 'new'
    },
    {
      id: 'id02',
      name: 'id02 with new category',
      category: 'old'
    }
  ];

}
