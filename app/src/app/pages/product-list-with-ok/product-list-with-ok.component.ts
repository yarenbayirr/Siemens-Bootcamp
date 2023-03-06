import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductStateService } from 'src/app/states/product-state.service';

@Component({
  selector: 'app-product-list-with-ok',
  templateUrl: './product-list-with-ok.component.html',
  styleUrls: ['./product-list-with-ok.component.css']
})
export class ProductListWithOkComponent {
  products: Product[] = [];
constructor(private stateService: ProductStateService) { 
  this.products = this.stateService.productList.filter(x => x.isOk == true);
}
load() {
  this.products = this.stateService.productList.filter(x => x.isOk == true);
}
}
