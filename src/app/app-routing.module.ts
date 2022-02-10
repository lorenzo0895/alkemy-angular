import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'details/:id', component:DetailsComponent, pathMatch:'full'},
  {path:'login', component:LoginComponent, pathMatch:'full'},
  {path:'', component:IndexComponent, pathMatch:'full'},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
