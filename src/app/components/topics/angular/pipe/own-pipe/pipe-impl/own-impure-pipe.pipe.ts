import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ownImpurePipe',
  standalone: true,
  pure: false
})
export class OwnImpurePipePipe implements PipeTransform {

  transform(valueList: any[], input: string): any {
    console.log('OwnImpurePipePipe - transform')
    return valueList.filter(item => item.category === input)
  }

}
