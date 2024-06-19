import {Component} from '@angular/core';
import * as _ from "lodash";

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
      name: 'id02 with old category',
      category: 'old'
    },
    {
      id: 'id03',
      name: 'id03 with new category',
      category: 'new'
    }
  ];

  copyObjectList = _.cloneDeep(this.objectList);

  changeCopyObjectList() {
    this.copyObjectList[0].category = 'other';
  }
}
