import { Component } from '@angular/core';
import { ProductStateService } from '../states/product-state.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent {
  constructor(private productService : ProductStateService) {}
  deleteProduct(id:number) {
    let index = this.productService.productList.findIndex(x=> x.id == id);
    this.productService.productList.splice(index, 1);
  }
}
