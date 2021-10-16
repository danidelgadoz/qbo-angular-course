import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    console.log('ReversePipe::transform', value);
    return value[0].toUpperCase() + value.substr(1).toLowerCase();;
  }

}
