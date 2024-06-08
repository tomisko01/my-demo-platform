import {AfterContentChecked, Component} from '@angular/core';

@Component({
  selector: 'app-after-content-checked-hook',
  templateUrl: './after-content-checked-hook.component.html',
  styleUrl: './after-content-checked-hook.component.css'
})
export class AfterContentCheckedHookComponent implements AfterContentChecked {
  imgPath: string = 'assets/img/dark-souls-solaire-praise-the-sun-sticker.jpg';
  prop: string = 'ameno';
  childContentInput: string = 'child Content Input String';

  objectToBothChild: any = {
    id: '001',
    name: 'Doge'
  }

  ngAfterContentChecked(): void {
    console.log('parent - ngAfterContentChecked');
    // this.imgPath = '';
    // no problem with that
  }

  changeImgPath(): void {
    this.imgPath = 'assets/img/Dark-Souls-Pepe.png'
    console.log('parent - image changed');
  }

  changeProp(): void {
    this.prop = 'dorime';
    console.log('parent - change input to child');
  }

  changeChildContentProp() {
    this.childContentInput = this.childContentInput.toUpperCase();
  }
}
