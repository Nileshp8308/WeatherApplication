import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForcastComponent } from './forcast/forcast.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {component:LandingComponent,path:''},
  {component:ForcastComponent,path:'forcast'},
  {component:LandingComponent,path:'landing'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
