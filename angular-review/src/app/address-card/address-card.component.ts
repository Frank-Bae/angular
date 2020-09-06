import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  // The any refers to any type of data
  user: any;

  constructor() {

    // all this information is being passed to the user variable
    this.user = {
      name: 'Foo Bae',
      title: 'developer',
      address: '123 denver st, City, State, 29223',
      phone: [
        '122-848-2838',
        '938-293-4503'
      ]
    };
   }

  ngOnInit(): void {
  }

}
