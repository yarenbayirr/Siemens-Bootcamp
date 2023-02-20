import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-component',
  template: `<h1>Hello<h1><input type="text"/>`,
  styles: [`.input{background-color:red}`]
})
export class InlineComponent {

}
