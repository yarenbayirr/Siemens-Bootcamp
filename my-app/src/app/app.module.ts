import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentEmployeeComponent } from './input-output-employee/parent-employee/parent-employee.component';
import { ChildEmployeeComponent } from './components/child-employee/child-employee.component';
import { ChildEmployeeDetailComponent } from './input-output-employee/components/child-employee-detail/child-employee-detail.component';


@NgModule({
  declarations: [ //componentlerin eklendiği yer
    AppComponent, ParentEmployeeComponent, ChildEmployeeComponent, ChildEmployeeDetailComponent,
  ],
  imports: [  //modullerin eklendiği yer
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
