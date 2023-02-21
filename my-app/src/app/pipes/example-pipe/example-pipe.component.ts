import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Product2 } from 'src/app/models/product2';

@Component({
  selector: 'app-example-pipe',
  templateUrl: './example-pipe.component.html',
  styleUrls: ['./example-pipe.component.css']
})
export class ExamplePipeComponent {
 product: Product2;
 name: string = "angulAr";
 currentDate= new Date();
 price: number = 20.99;
 constructor(){
  this.product = { id: 1, name: "kalem", price: 20.99};
 }
}
