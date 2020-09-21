import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  myMethod() {
    return console.log('yo')
  }
  getLorem() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
  getLoremId(id: number):Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }

}
