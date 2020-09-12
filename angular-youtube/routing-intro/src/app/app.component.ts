import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-intro';
  // homeRoute = "home";
  // settingsRoute= "settings"

  //This is an easier way where we can loop instead
  routes = [
    { linkName: 'Home', url: 'home'},
    { linkName: 'Settings', url: 'settings' }
  ]
}
