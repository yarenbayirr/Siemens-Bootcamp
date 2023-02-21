import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutmainComponent } from './layoutmain/layoutmain.component';
import { LayoutfooterComponent } from './layoutfooter/layoutfooter.component';
import { LayoutheaderComponent } from './layoutheader/layoutheader.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    LayoutmainComponent,
    LayoutfooterComponent,
    LayoutheaderComponent,
    LayoutmainComponent
  ],
  exports: [
    LayoutfooterComponent,
    LayoutheaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class SharedModule { }
