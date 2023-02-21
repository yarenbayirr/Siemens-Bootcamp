import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private element: ElementRef) { 
    element.nativeElement.style.backgroundColor = 'blue';
    element.nativeElement.style.fontSize = '20px';
    element.nativeElement.style.color = 'white';
  }

}
