// allows to inject to a constructor and component, the injectable
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable } from 'rxjs';

import { Todo } from '../models/Todos'

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

//ng does the work for us by injecting it to module so it can be used on others
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5';

  constructor(private http: HttpClient) { }

  //Get Todos
  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  // Delete Todo
  deleteTodo(todo: Todo):Observable<Todo> {
    // Remove from UI
    const url = `${this.todosUrl}/${todo.id}`;
    // Remove from server
    return this.http.delete<Todo>(url, httpOption);
  }

  // Add Todo
  addTodo(todo: Todo):Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOption)
  }

  // Toggle Completed
  toggleCompleted(todo: Todo):Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`
    return this.http.put(url, todo, httpOption)
  }
}
