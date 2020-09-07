import { Component } from '@angular/core';
import { User } from './address-card/user.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-review';

  user: User;

  constructor() {
    this.user = new User();
    this.user.name = "frank";
    this.user.title = "developer";
    this.user.address = "222 good st";
    this.user.phone = [
      '333-444-2943'
    ]
  }
}
