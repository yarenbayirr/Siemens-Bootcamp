import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Categories } from 'src/app/models/categories';
import { Periods } from 'src/app/models/periods';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  newProduct: Product | undefined;
  productList: Product[] = [];
  constructor(private formBuilder: FormBuilder){

  }
  myForm = this.formBuilder.group({
    name: [''],
    price: [0],
    category: [''],
    isPublish: [false],
    publishTime: ['']
  });

  categoryList : Categories[] = [
    {id:1, text:"kalemler"},
    {id:2, text:"kitaplar"},
    {id:3, text:"defterler"},
  ];
  
  publishList: Periods[] = [
    {id:1, text:"1 ay"},
    {id:2, text:"3 ay"},
    {id:3, text:"6 ay"},
  ]

  saveProduct(){
    this.newProduct = this.myForm.value as Product
    console.log(this.newProduct);
    this.productList.push(this.newProduct);
    this.myForm.reset();
  }
}
