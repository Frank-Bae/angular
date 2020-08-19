import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  data1: string = 'one way';
  data2: string = '';
  serverCreated = false;

  onCreateServer() {
    this.serverCreated = true;
  }
}
