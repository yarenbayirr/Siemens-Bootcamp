import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ReferencesComponent } from './pages/references/references.component';
import { LayoutmainComponent } from './shared/layoutmain/layoutmain.component';

const routes: Routes = [
  {
    path: '', component: LayoutmainComponent, children: [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'aboutus', component: AboutComponent},
  {path: 'references', component: ReferencesComponent},
  {path: 'contact', component: ContactComponent}
]
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
