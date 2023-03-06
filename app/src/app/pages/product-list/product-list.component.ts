import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductStateService } from 'src/app/states/product-state.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  @Output() isOkClickEvent = new EventEmitter();
  constructor(private productState: ProductStateService) { }
  ngOnInit(): void {
    this.productList = this.productState.productList;
  }
  updateProduct(id: number){
    var updatedproduct = this.productList.find(p => p.id === id);
    updatedproduct!.name = "Yeni Kalem";
    updatedproduct!.price = 300;
  }
  isOk(id:number){
    let productIndexToUpdate = this.productState.productList.findIndex(x=> x.id == id);
    this.productList[productIndexToUpdate].isOk = !this.productList[productIndexToUpdate].isOk;


    this.isOkClickEvent.emit();
    console.log(this.productState.productList);

  }
}
