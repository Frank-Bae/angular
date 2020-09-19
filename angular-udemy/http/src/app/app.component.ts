import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts()
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    console.log(postData)
    // adding the .json is a firebase requirement
    this.http.post('https://ng-complete-guide-8f15d.firebaseio.com/posts.json',postData)
      // if you are not subscribing to it, ng see it as no one is interested in the response
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.http.get('https://ng-complete-guide-8f15d.firebaseio.com/posts.json')
    .pipe(map(responseData => {
      const postsArray = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
        postsArray.push({ ...responseData[key], id: key })
        }
      }
      return postsArray;
    }))
    .subscribe(posts => {
      console.log(posts)
    })
  }
}
