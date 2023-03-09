import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './mainpages/home/home.component';
import { AboutComponent } from './mainpages/about/about.component';
import { GalleryComponent } from './mainpages/gallery/gallery.component';
import { AdminhomeComponent } from './adminpages/adminhome/adminhome.component';
import { PostListComponent } from './adminpages/post-list/post-list.component';
import { CommentsListComponent } from './adminpages/comments-list/comments-list.component';
import { UserListComponent } from './adminpages/user-list/user-list.component';
import { UserDetailComponent } from './adminpages/user-detail/user-detail.component';
import { VisitorformComponent } from './mainpages/visitorform/visitorform.component';
import { VisitordataComponent } from './adminpages/visitordata/visitordata.component';
import {HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgConfirmModule} from 'ng-confirm-box'





@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        GalleryComponent,
        AdminhomeComponent,
        PostListComponent,
        CommentsListComponent,
        UserListComponent,
        UserDetailComponent,
        VisitorformComponent,
        VisitordataComponent,
        
        
        

    
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule,
        NgConfirmModule
        
       
     
    
    ]
})
export class AppModule { }
