import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserListComponent } from './user-list/user-list.component';



@NgModule({
  declarations: [
    UserCreateComponent,
    UserListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UserListComponent  //modullerin kullanılması için export
  ]
})
export class UserModule { }
