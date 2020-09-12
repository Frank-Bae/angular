import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { SettingsComponent } from './settings/settings.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { SettingsProfileComponent } from './settings-profile/settings-profile.component';
import { SettingsContactComponent } from './settings-contact/settings-contact.component';

//this is what configures your routes
const routes: Routes = [
  //the path is the url path
  // when path is empty, that is the first thing user will see. You are
  // redirecting the view to the home path. It will automatically direct
  // to home.
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'settings',
    component: SettingsComponent,
    // children lets you configure child routes, the value of that is another array
    // the parent would be settings
    children: [
      // we remove the slash in redirectTo because we don't want to renavigate
      // to just profile. we want settings/profile
      {path: '', redirectTo: 'profile', pathMatch: 'full'},
      {path: 'profile', component: SettingsProfileComponent},
      {path: 'contact', component: SettingsContactComponent},
      // If the user goes to setting/foo or any url after setting that isn't listed
      // It will redirect it to profile
      {path: '**', redirectTo: 'profile', pathMatch: 'full'}
    ]
  },
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
