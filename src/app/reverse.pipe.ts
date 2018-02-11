import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    let reversed = '';
    for (let i = 0; i < value.length; i++) {
      reversed += value.substr(value.length - 1 - i, 1);
    }
    return reversed;
  }

}
