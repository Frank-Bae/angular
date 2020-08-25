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
  allowNewServer = false;
  serverCreationStatus = 'no server was created';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }
  onCreateServer() {
    this.serverCreationStatus = 'server was created';
  }
  onUpdateServerName(event: any) {
    console.log(event)
    this.serverName = event.target.value;
  }
}
