import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CounterDirective } from './directives/counter.directive';
import { TextboxComponent } from './textbox/textbox.component';



@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CounterDirective,
    TextboxComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
