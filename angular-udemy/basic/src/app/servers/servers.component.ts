import { Component, OnInit } from '@angular/core';

@Component({
  // making the selector an attribute
  // selector: '[app-servers]',
  // making the selector by class
  // selector: 'app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `<app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
