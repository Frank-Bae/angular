import { Component } from '@angular/core';

//Decorator must always attach a @
@Component({
  //can later use this component within other components
  selector: 'app-server',
  templateUrl: './server.component.html'
})

//These are the classes that you instantiate
export class ServerComponent {

}
