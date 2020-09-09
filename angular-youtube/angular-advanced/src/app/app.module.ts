import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// By adding the module, you have access to all the module's component
import { ViewModule } from './view/view.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //The viewModule allows you to use components from other modules
    ViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
