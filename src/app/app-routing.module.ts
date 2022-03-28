import { RestourantsComponent } from './restourants/restourants.component';
import { HomeComponent } from './core/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'restourants', component: RestourantsComponent},
  {path:'restourants/:cuisine', component: RestourantsComponent},
  {path:'about', component:AboutComponent},
  {path: '', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
