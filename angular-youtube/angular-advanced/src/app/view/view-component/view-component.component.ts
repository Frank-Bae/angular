import { Component, OnInit } from '@angular/core';
import { TestService } from '../../test.service'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
// this is what is being exported if you want other components to use this component
export class ViewComponentComponent implements OnInit {

  userName: string;
  response: any;

  // we are able to use this service because it was declared in the app module
  // provided in the providers. providers are not restricted to their module
  constructor(private svc: TestService, private http: HttpClient) {
    svc.printToConsole("From inner module / component")
   }

  ngOnInit(): void {
  }

  search() {
    this.http.get('https://api.github.com/users/' + this.userName)
    //this is a shortcut calling the obs without actually typing it out.
    //just add dot subscribe on the next line to refer to the http
    .subscribe((response) =>  {
      this.response = response
      console.log(this.response)
    })
  }

}
