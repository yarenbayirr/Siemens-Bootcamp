import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostListComponent } from './post-list/post-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [  //bunu ekledik
  {path: '', component: PostListComponent},
  {path: 'post-list', component: PostListComponent},
  {path: 'post-create', component: PostCreateComponent},
]

@NgModule({
  declarations: [
    PostCreateComponent,
    PostListComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes) //bunu ekledik
  ]
})
export class PostModule { }
