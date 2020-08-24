import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  posts: Object;

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.myMethod();
    this._http.getLorem().subscribe(data => {
      this.posts = data
    })
  }

}
