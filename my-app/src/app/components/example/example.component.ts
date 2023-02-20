import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  names:string[] = [];
  add(name:string){
    console.log(name);
    this.names.push(name);
  }
}
