import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'components-databinding';
  // The app component here holds all the information that the users submits and gets
  // rendered onto the app view. Passing this information to the server element component
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'}]

  // The onServerAdded and onBluePrintAdded is being called due to @Output
  // this is emitting data from the child components to the parent app component
  // the parent is listening and passes a callback to the event or dataChange.

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverName
    })
  }

  onBluePrintAdded(bluePrintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverName
    })
  }
}
