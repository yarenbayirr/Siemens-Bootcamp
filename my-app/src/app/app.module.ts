import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChildEmployeeDetailComponent } from './input-output-employee/components/child-employee-detail/child-employee-detail.component';
import { ChildEmployeeComponent } from './input-output-employee/components/child-employee/child-employee.component';
import { ParentEmployeeComponent } from './input-output-employee/components/parent-employee/parent-employee.component';


@NgModule({
  declarations: [ //componentlerin eklendiği yer
    AppComponent, ParentEmployeeComponent, ChildEmployeeComponent, ChildEmployeeDetailComponent
  ],
  imports: [  //modullerin eklendiği yer
  BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
