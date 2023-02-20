import { Component } from '@angular/core';
import { IPerson, Person } from './models/person';
import { Product } from './models/product'
import { Product2 } from './models/product2'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  name:string = "angular";
  product:Product;
  product2 : Product2;
  person: IPerson;
  person2: IPerson;
  constructor(){
    this.product = new Product(1, "kalem 1", 200);
    this.product2 = { id:1, name: "kalem 2", price: 300};
    this.person = { id: 1, name: "ahmet", surname: "yıldız", age:20};
    this.person2 = new Person (1, "mehmet", "yıldız", 23);
  }
  change(){
    this.name = "angular 15"

  }
}
