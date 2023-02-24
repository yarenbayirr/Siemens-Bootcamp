import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ParentComponent } from './input-output/parent/parent.component';
import { ChildHeaderComponent } from './input-output/child-header/child-header.component';
import { ChildListComponent } from './input-output/child-list/child-list.component'; //direkt internetten aldık from kısmını

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildHeaderComponent,
    ChildListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule //sonra buraya da ekledik
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
