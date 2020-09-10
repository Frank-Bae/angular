import { Component, OnInit } from '@angular/core';
import { TestService } from '../../test.service'

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
// this is what is being exported if you want other components to use this component
export class ViewComponentComponent implements OnInit {

  // we are able to use this service because it was declared in the app module
  // provided in the providers
  constructor(private svc: TestService) {
    svc.printToConsole("From inner module / component")
   }

  ngOnInit(): void {
  }

}
