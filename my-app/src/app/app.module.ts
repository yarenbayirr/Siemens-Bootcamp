import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InlineComponent } from './components/inline-component/inline.component';
import { NormalComponent } from './components/normal/normal/normal.component';
import { StructuralDirectiveComponent } from './components/structural-directive/structural-directive.component';
import { ExampleComponent } from './components/example/example.component';

@NgModule({
  declarations: [ //componentlerin eklendiği yer
    AppComponent,
    InlineComponent,
    NormalComponent,
    StructuralDirectiveComponent,
    ExampleComponent
  ],
  imports: [  //modullerin eklendiği yer
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
