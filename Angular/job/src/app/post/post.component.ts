import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Output() sendId: EventEmitter<any> = new EventEmitter();

  id: number;
  postId: any;

  constructor(private router: ActivatedRoute, private _http: HttpService) {

  }

  ngOnInit(): void {
    this.id = this.router.snapshot.params.id
    console.log(this.router.snapshot.params)
    this._http.getLoremId(this.id).subscribe(data => {
      this.postId = data
      console.log(data)
    })

  }

}
