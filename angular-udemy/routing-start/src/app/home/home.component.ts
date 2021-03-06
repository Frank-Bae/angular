import { Component, OnInit } from '@angular/core';
// Router has to be imported
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // must add the variable for router
  constructor(private router: Router) { }

  ngOnInit() {
  }

  // programatically routing to a different page
  onLoadServer(id: number) {
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'});
  }

}
