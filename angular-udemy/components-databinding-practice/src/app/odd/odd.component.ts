import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  // Since we are inputting data, the value from oddNumber will be
  // stored in the number variable
  @Input() number: number;

  constructor() { }

  ngOnInit(): void {
    console.log(this.number)
  }

}
