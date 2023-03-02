import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AboutComponent } from './mainpages/about/about.component';
import { HomeComponent } from './mainpages/home/home.component';
import { LoginComponent } from './mainpages/login/login.component';
import { EmployeeListComponent } from './manager/employee-list/employee-list.component';
import { ManagerHomeComponent } from './manager/manager-home/manager-home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'about', component: AboutComponent},
  {path: 'manager', canActivate:[AuthGuard], children: [
    {path: '', component: ManagerHomeComponent},
    {path: 'home', component: ManagerHomeComponent},
    {path: 'employee-list', component: EmployeeListComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
