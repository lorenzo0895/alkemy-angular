import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './components/index/index.component';
import { NavComponent } from './components/nav/nav.component';
import { AddSuperheroComponent } from './components/add-superhero/add-superhero.component';

import {DragDropModule} from '@angular/cdk/drag-drop';
import { DetailsComponent } from './components/details/details.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { PowerstatComponent } from './components/powerstat/powerstat.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    NavComponent,
    AddSuperheroComponent,
    DetailsComponent,
    PowerstatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    DragDropModule
  ],
  providers: [
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
