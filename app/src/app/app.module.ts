import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  //formu kullanmak için bunu entegre ettik
    ReactiveFormsModule,  //reactive için bunu
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
