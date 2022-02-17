import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'details/:id', component:DetailsComponent, pathMatch:'full', canActivate:[AuthGuard]},
  {path:'', component:IndexComponent, pathMatch:'full', canActivate:[AuthGuard]},
  {path:'login', component:LoginComponent, pathMatch:'full'},
  {path:'**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
