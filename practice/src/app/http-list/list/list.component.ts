import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  posts: any;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getPosts().subscribe(data => {
      this.posts = data
      console.log(data)
    })
  }

}
