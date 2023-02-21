import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ReferencesComponent } from './pages/references/references.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SharedModule } from './shared/shared.module';




@NgModule({
  declarations: [ 
    AppComponent, HomeComponent, AboutComponent, ReferencesComponent, ContactComponent, 
  
  ],
  imports: [  
    BrowserModule,
    AppRoutingModule,
    SharedModule


  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
