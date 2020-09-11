import { Component } from '@angular/core';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
// the components only need to instantiate the service. From there
// they service their own needs with the instantiated service instance.
// We are able to use this class/method because the app module provides us to use it
// the private allows us to use the service within this component
// How to tell angular we need instance of a service
// the TestService object is accessiable because it is being passed to svc

  constructor(private svc: TestService, private http: HttpClient) {
    this.svc.printToConsole("Got the service")
  }



  ngOnInit() {
    //this is grabbing the data from the following url/api
    //what you get back is an asynchronus object from this http request
    //this is called an observable(obs), we are not getting the actual result
    let obs = this.http.get('https://api.github.com/users/Frank-Bae');
    //you can pass the observable to the function where it handles the request
    //of what you want to do with the obs
    obs.subscribe((response) => console.log(response))
  }


}
