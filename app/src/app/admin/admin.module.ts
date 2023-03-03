import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { DetailsComponent } from './details/details.component';
import { AdminmainlayoutComponent } from './adminmainlayout/adminmainlayout.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    UserListComponent,
    DetailsComponent,
    AdminmainlayoutComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HomeComponent,
    UserListComponent,
    DetailsComponent
  ]
})
export class AdminModule { }
