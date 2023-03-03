import { Component, OnDestroy } from '@angular/core';
import { ProductStateService } from 'src/app/services/product-state.service';
import { User, UserStateService } from 'src/app/services/user-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy{
  user?: User
 constructor(private userState: UserStateService, private productState: ProductStateService){
    this.user = userState.currentUser;
 }
  ngOnDestroy(): void { //componenti terkediğ başka bir componente geçince çalışıyor
    console.log("Home destroy")
  }
  addProduct(){
     this.productState.product.push({id:1, name:"kalem1", price: 100, color:"kırmızı"})
  }
}
