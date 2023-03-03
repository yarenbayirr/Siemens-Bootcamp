import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublisherComponent } from './publisher/publisher.component';
import { Subscribe1Component } from './subscribe1/subscribe1.component';
import { Subscribe2Component } from './subscribe2/subscribe2.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PublisherComponent,
    Subscribe1Component,
    Subscribe2Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    PublisherComponent,
    Subscribe1Component,
    Subscribe2Component
  ]
})
export class PageModule { }
