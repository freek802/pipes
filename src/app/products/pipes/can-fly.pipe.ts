import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
})
export class CanFlyPipe implements PipeTransform {
  transform(canFly: boolean): 'Can fly' | 'Can not fly' {
    return canFly ? 'Can fly' : 'Can not fly';
  }
}
