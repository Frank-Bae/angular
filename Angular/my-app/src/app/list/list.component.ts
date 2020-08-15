import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  brews: Object;

  constructor(private _http: HttpService) { }

  //Whatever is loaded in ngInit will run when the component is loaded
  //Similar to componentDidMount
  ngOnInit(): void {
    this._http.myMethod();
    this._http.getBeer().subscribe(data => {
      this.brews = data
      console.log(this.brews)
    });
  }

}
