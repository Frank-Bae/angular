import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  // With the input in place, we are able to access this property to the world
  // any parent or component is now able to bind to element
  // this is an alias, if you want to bind to this property, it has to be
  // srvElement. We are passing data from the parent to the child
  @Input('srvElement') element: {type: string, name: string, content: string}

  constructor() { }

  ngOnInit(): void {
  }

}
