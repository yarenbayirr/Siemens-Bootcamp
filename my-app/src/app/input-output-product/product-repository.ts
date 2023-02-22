import { Product } from "./models/product";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root',
  })
export class ProductRepository {
    private productList: Product[] = [];
    load(){
        this.productList.push({id:1, name: "kalem 1", price:100, stock:20, category: "kalemler", color: "kırmızı"})
        this.productList.push({id:2, name: "kalem 2", price:200, stock:30, category: "kalemler", color: "mavi"})
        this.productList.push({id:3, name: "kalem 3", price:300, stock:40, category: "kalemler", color: "yeşil"})
    }
    constructor(){
        this.load()
    }
   
    getList(){
        return this.productList as ReadonlyArray<Product>;

    }
    getById(id:number){
       return this.productList.find(x=>x.id == id);
    }
    add(newProduct: Product){
        this.productList.push(newProduct);

    }
    update(updateProduct: Product){
        let productIndexToUpdate = this.productList.findIndex(x=>x.id == updateProduct.id);
        this.productList[productIndexToUpdate].name = updateProduct.name;
        this.productList[productIndexToUpdate].category = updateProduct.category;
        this.productList[productIndexToUpdate].color = updateProduct.color;
        this.productList[productIndexToUpdate].price = updateProduct.price;
        this.productList[productIndexToUpdate].stock = updateProduct.stock;
    }
    delete(id:number){
        //1.yol
        this.productList = this.productList.filter(x=>x.id != id);
        //2.yol
        // let productIndexToDelete = this.productList.findIndex(x=>x.id == id);
        // this.productList.splice(productIndexToDelete, 1);

    }
}
