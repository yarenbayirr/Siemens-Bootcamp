import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductCreateComponent } from './pages/product-create/product-create.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductListWithOkComponent } from './pages/product-list-with-ok/product-list-with-ok.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductDeleteComponent,
    ProductListWithOkComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
