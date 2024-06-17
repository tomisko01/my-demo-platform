import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ownPipe',
})
export class OwnPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
