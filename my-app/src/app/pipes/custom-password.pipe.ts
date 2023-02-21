import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPassword'
})
export class CustomPasswordPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    
    let text = value as string;
    let txtArr = text.split('');
    let arr1 = txtArr.slice(0,3);
    let arr2 = txtArr.slice(3);
    for (let index = 0; index < arr2.length; index++) {
      arr2[index] = "*";
    }
    arr1 = arr1.concat(arr2)
    let str = arr1.join("");
    return str;

  }

}
