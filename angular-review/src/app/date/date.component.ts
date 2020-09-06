import { Component, OnInit } from '@angular/core';

// The angular app always looks at the ts file when gathering its information.
// The component with html and css are decorators that add to the ts file
// these are the metadata that adds extra info to the class

@Component({
  selector: 'date',
  templateUrl: './date.component.markup.html',
  styleUrls: ['./date.component.css']
})

// Whenever the selector is used, it instanties the class. When it gets instantited,
// it tells angular to look at the component to get html and css. The ts file
// is pretty much bundling the html and css
export class DateComponent implements OnInit {

  // This is creating a date instance when the object is being created
  // The date component instance will have message available
  message: string = new Date().toDateString();

  dateMessage: string;
  someNumber: number = 10;

  constructor() {
    setInterval(() => {
      let currentDate = new Date();
      this.dateMessage = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();
    } , 1000)

  }

  ngOnInit(): void {
  }

  addTwoNumbers(a: number, b: number) {
    return a + b;
  }

}
