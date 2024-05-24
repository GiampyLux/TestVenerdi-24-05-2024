import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AudiComponent } from './pages/audi/audi.component';
import { FordComponent } from './pages/ford/ford.component';
import { FiatComponent } from './pages/fiat/fiat.component';
import { Error404Component } from './pages/error404/error404.component';

const routes: Routes = [
{
  path:"",
  redirectTo: "/home",
  pathMatch: "full"
},
{
  path:"home",
  component: HomeComponent,
  title: "home"
},
{
  path:"audi",
  component: AudiComponent,
  title: "audi"
},
{
  path:"ford",
  component: FordComponent,
  title: "ford"
},
{
  path:"fiat",
  component: FiatComponent,
  title: "fiat"
},
{
  path:"**",
  component: Error404Component,
  title: "error 404"
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
