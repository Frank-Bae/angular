import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
// the components only need to instantiate the service.From there
//   they service their own needs with the instantiated service instance.
// We are able to use this class/method because the app module provides us to use it
// the private allows us to use the service within this component
  private svc: TestService;

// How to tell angular we need instance of a service
// the TestService object is accessiable because it is being passed to svc

  constructor(svc: TestService) {
    this.svc = svc;
    svc.printToConsole('got the service')
  }

  // this is the simpler way of saving the service
  // constructor(private svc: TestService) {
  //   this.svc.printToConsole("Got the service")
  // }
}
