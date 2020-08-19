import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'frank';
  myId = "testId";
  isDisabled = true;

  //class binding
  successClass = 'text-success';
  hasError = true;
  isSpecial = true;
  messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  highlightColor = "orange";
  titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }


  title = 'test';

  getInterpolation() {
    return "hello " + this.name;
  }

  //event binding
  onClick(event) {
    console.log(event);
    this.greeting = event.type;
  }
  greeting = "";

  //template reference variable
  logMessage(value){
    console.log(value)
  }

  //Two Way Binding
  names = "";

  //Structural Direct
  displayName = true;
  color = "blue";

  colors = ["red", "blue", "green", "yellow"]
}
