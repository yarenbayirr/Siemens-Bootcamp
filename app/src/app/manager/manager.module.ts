import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';



@NgModule({
  declarations: [
    ManagerHomeComponent,
    EmployeeListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ManagerModule { }
