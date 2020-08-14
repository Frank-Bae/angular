import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// This is where you want to import the components you will be using to route
import { HomeComponent } from './home/home.component'
import { ListComponent } from './list/list.component'

// You would use this to connect the routes you want to connect components
// the path that has an empty string will be the one that loads first
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
