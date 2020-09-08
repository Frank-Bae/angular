import { Component } from '@angular/core';
import { User } from './address-card/user.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-review';

  //now that it has all the properties and values, it can be passed to a different
  //component, similar to prop. (2)
  user: User;

  constructor() {
    // allowing the user variable to get its blue print or instantiate
    // from the user.model.ts class (1)
    this.user = new User();
    this.user.name = "frank";
    this.user.title = "developer";
    this.user.address = "222 goodee st";
    this.user.phone = [
      '333-444-2943',
      '333-444-2323'
    ]
  }
}
