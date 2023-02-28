import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TwoWayBindingComponent } from './forms/two-way-binding/two-way-binding.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    TwoWayBindingComponent,
    ReactiveFormsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  //formu kullanmak için bunu entegre ettik
    ReactiveFormsModule, //reactive için bunu
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
