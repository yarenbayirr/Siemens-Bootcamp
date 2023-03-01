import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'', component: HomeComponent},
  {path:'user-list', component: UserListComponent},
  {path:'user-create', component: UserCreateComponent},
  //post ile başlayan bir path varsa
  {path:'post', loadChildren: () => import('./post/post.module').then((m) => m.PostModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
