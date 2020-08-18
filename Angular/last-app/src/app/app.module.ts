import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//type script knows where to find server component
import { ServerComponent } from './server/server.component'

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServersComponent } from './servers/servers.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    //whenver you aadd a component it must go in the decleration
    ServerComponent,
    ServersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  //the bootstrap indicates to Angular of which module to look for
  bootstrap: [AppComponent]
})
export class AppModule { }
