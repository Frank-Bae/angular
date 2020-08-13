import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crash-todolist';
  // We are using typescript where we are defining this property as a string
  // It will render but the server will tell you it is an error
  name:string = 'Frank'

  constructor() {
    this.changeName('Cindy')
    // this will run first because the constructor ran before frank is rendered
    // this.name = "ted"
  }

  changeName(name:string) {
    this.name = name;
  }
}
