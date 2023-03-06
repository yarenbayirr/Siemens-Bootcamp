import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('style.border') border: string;
  @HostBinding('class.border-invalid') invalidCss: boolean;
  @HostListener('mouseover') mouseOver(){
    console.log("mouse over");
    this.border = "10px solid blue"
  }

  constructor() {
    this.border = "1px solid red";
    this.invalidCss = true;
    console.log("appHigliht çalıştı");
   }

}
