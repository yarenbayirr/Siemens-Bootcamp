import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminHomeComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    FormsModule  //[(ngModel)] çift yönlü binding kullanmıştık html user listte. Altını kırmızı yakıyor. O yüzden bunu ekledik
  ]
})
export class AdminModule { }
