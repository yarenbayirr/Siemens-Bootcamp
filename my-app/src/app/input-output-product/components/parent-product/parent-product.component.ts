import { Component } from '@angular/core';
import { RealProductAPIService } from 'src/app/real-product-api.service';
import { Product } from '../../models/product';
import { ProductRepository } from '../../product-repository';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-parent-product',
  templateUrl: './parent-product.component.html',
  styleUrls: ['./parent-product.component.css']
})
export class ParentProductComponent {
    
    productList: ReadonlyArray<Product>
    selectedProduct: Product | undefined;
    constructor(private productService: ProductService, private productService2: RealProductAPIService){ //newleden product service private olarak constructorda aldık

      this.productList = this.productService.getAll();
    }
    showDetail(productId : number){
        this.selectedProduct = this.productService.getById(productId);
        
    }
    get toggleProductDetail(){
      return this.selectedProduct != undefined;
    }

}
