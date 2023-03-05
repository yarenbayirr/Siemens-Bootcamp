import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './adminpages/adminhome/adminhome.component';
import { CommentsListComponent } from './adminpages/comments-list/comments-list.component';
import { PostListComponent } from './adminpages/post-list/post-list.component';
import { UserDetailComponent } from './adminpages/user-detail/user-detail.component';
import { UserListComponent } from './adminpages/user-list/user-list.component';
import { VisitordataComponent } from './adminpages/visitordata/visitordata.component';
import { AboutComponent } from './mainpages/about/about.component';
import { GalleryComponent } from './mainpages/gallery/gallery.component';
import { HomeComponent } from './mainpages/home/home.component';
import { VisitorformComponent } from './mainpages/visitorform/visitorform.component';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';


const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'form', component: VisitorformComponent},
  ]},
  {path: 'admin', component: AdminLayoutComponent, children:[
    {path: 'home', component: AdminhomeComponent},
    {path: 'comments-list/:id', component: CommentsListComponent},
    {path: 'posts', component: PostListComponent},
    {path: 'users', component: UserListComponent},
    {path: 'visitors', component: VisitordataComponent},
    {path: 'post-list', component: PostListComponent},
    {path: 'user-list', component: UserListComponent},
    {path: 'user-detail/:id', component: UserDetailComponent},

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
