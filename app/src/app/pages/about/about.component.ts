import { Component, OnDestroy } from '@angular/core';
import { ProductStateService } from 'src/app/services/product-state.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnDestroy {
  ngOnDestroy(): void {
    console.log("About destroy çalıştı")
  }
  constructor(public productService: ProductStateService){
    
  }

}
