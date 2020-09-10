import { Injectable } from '@angular/core';

// The @Injectable metadata field providedIn: ‘root’ targets the root module
// of the current application(app.module.ts).It registers the service with the
// module’s injector so that it can inject that service into any of its children.
@Injectable({
  providedIn: 'root'
})
export class TestService {

  printToConsole(arg) {
    console.log(arg);
  }
}

// Components do not need to provide any extraneous information either.
// A services imports what it needs to function on behalf of the components
//  it services.The components only need to instantiate the service.From there
//   they service their own needs with the instantiated service instance.
