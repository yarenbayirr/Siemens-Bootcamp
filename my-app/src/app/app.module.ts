import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [ //componentlerin eklendiği yer
    AppComponent, 
    HomeComponent, 
    GalleryComponent, 
    ContactComponent, 
    AboutComponent
  
  ],
  imports: [  //modullerin eklendiği yer
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    SharedModule

  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
