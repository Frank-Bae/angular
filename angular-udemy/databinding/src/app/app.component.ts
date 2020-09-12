import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //this is being passed to the server element component within the view page
  serverElements = [{type: 'server', name: 'Typescript', content: 'Just a test'}];


}
