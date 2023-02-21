import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customUppercase'
})
export class CustomUppercasePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
   

    let text = value as string;
    return `@${text.toUpperCase()}`;
  }

}
