import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;
  text = "even";
  value = 5;

  changeText() {
    if (this.onlyOdd === false) {
      this.onlyOdd = true
      this.text = "odd"
      this.value = 10
    } else {
      this.onlyOdd = false
      this.text = "even"
      this.value = 100
    }
  }
}
