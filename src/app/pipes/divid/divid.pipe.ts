import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'divid',
  standalone: true
})
export class DividPipe implements PipeTransform {

  transform(value: number, divider: number): number {
    return value / divider;
  }

}
