import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model'

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
// The onInit lets angular know the method usage of init(life cycle hook)
export class AddressCardComponent implements OnInit {

  // The any refers to any type of data
  // user: any;

  // This is annotation letting angualr know that userName is an input
  // This Input is a class you import from angular core
  @Input('user') userObj: User;

  //create a typescript class how the user object should be


  constructor() {
    // The consturcor immeditely fires when rendered
    // all this information is being passed to the user variable
    // this.user = {
    //   name: this.userName,
    //   title: 'developer',
    //   address: '123 denver st, City, State, 29223',
    //   phone: [
    //     '122-848-2838',
    //     '938-293-4503'
    //   ]
    // };
   }

  //  When angualr is done initlaizing that instance, it will try to run
  //  whatever is in ngoninit. Execute code when fully initialized
  ngOnInit(): void {
    // this.user = {
    //   name: this.userObj.name,
    //   title: this.userObj.designation,
    //   address: this.userObj.address,
    //   phone: this.userObj.phone
    // };
  }
}
