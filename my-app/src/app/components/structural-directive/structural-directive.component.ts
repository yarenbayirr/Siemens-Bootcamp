import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent {
  toggleShow:boolean = true;
  productList: Product [] = [];
  messageCount:number=3;
  boxCss = false;
  box2Css = false;
  constructor(){
    this.productList.push(new Product(1, "kalem 1", 100));
    this.productList.push(new Product(2, "kalem 2", 200));
    this.productList.push(new Product(3, "kalem 3", 300));
  }
  toggle(){
    this.toggleShow = !this.toggleShow;
  }
  addProduct(){
    this.productList.push(new Product (4, "kalem 4", 400));
  }
  removeProduct(id:number){
    this.productList = this.productList.filter(x=>x.id !=id) //aynı productlisti o idli eleman olmadan dönecek
  }
  addClass(){
    this.boxCss = true;
    this.box2Css = false;
  }
}
