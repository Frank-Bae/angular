import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// By adding the module, you have access to all the module's component
import { ViewModule } from './view/view.module';
import { TestService } from './test.service';

import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //The viewModule allows you to use components from other modules
    ViewModule,
    HttpClientModule,
  ],
  // the providers is where your services needs to go
  // this service is availale for other components to use since this is the parent
  // and allows child to use the components. If you look in view component ts
  // we see that they are allowed to use that service
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
