import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { AdminmainlayoutComponent } from './admin/adminmainlayout/adminmainlayout.component';
import { DetailsComponent } from './admin/details/details.component';
import { HomeComponent } from './admin/home/home.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { AboutComponent } from './mainlayout/about/about.component';
import { ContactComponent } from './mainlayout/contact/contact.component';
import { MainhomeComponent } from './mainlayout/mainhome/mainhome.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';


const routes: Routes = [
  {path: '', component: MainlayoutComponent, children : [
   
    {path: 'anasayfa', component: MainhomeComponent},
    {path: 'hakkimizda', component: AboutComponent},
    {path: 'iletisim', component: ContactComponent},
  ]},
  // {path: 'admin', loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule)
  // },
  {path: 'admin', component: AdminmainlayoutComponent, children: [
    {path: 'visitor', component: HomeComponent},
    {path: 'details', component: DetailsComponent},
    {path: 'user-list', component: UserListComponent},

  ]},

  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
