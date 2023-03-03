import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { MainhomeComponent } from './mainlayout/mainhome/mainhome.component';
import { AboutComponent } from './mainlayout/about/about.component';
import { ContactComponent } from './mainlayout/contact/contact.component';
import { AdminModule } from './admin/admin.module';




@NgModule({
    declarations: [
        AppComponent,
        MainlayoutComponent,
        MainhomeComponent,
        AboutComponent,
        ContactComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AdminModule
    
    ]
})
export class AppModule { }
