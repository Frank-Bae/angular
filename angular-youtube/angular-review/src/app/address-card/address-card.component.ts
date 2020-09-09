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
  // now that we recieved the instnatition of user, we can pass the variable
  // name to the decorator of the html file to access that object (4)
  @Input('user1') userObj: User;
  isCollapsed: boolean = true;

  constructor() {

   }

   toggleCollapse() {
     this.isCollapsed = !this.isCollapsed;
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
