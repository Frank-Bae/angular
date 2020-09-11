import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { SettingsComponent } from './settings/settings.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

//this is what configures your routes
const routes: Routes = [
  //the path is the url path
  // when path is empty, that is the first thing user will see. You are
  // redirecting the view to the home path. It will automatically direct
  // to home.
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'settings', component: SettingsComponent },
  //this is a wild card where if the path doesn't match any of the paths established
  //it will change the view to a custom error component that you created.
  //no matter what the url is map it to the component. it is not an angular error
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
