import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'ownPipe'
})
export class OwnPipePipe implements PipeTransform {

  transform(valueList: any[], input: string): any {
    console.log('OwnPipe - transform')
    return valueList.filter(item => item.category === input)
  }

}

