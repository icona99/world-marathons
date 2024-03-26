import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutText'
})
export class CutTextPipe implements PipeTransform {

  transform(value: string, maxLengthChar = 20): unknown {
    return `${value.substring(0, maxLengthChar)}${value.length>maxLengthChar ? '...' : ''}`;
  }

}
