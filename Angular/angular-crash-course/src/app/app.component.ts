import { Component } from '@angular/core';
import { Todo } from './models/Todos'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crash-course';

  newTodo;

  sendToGrandparent(todo: Todo) {
    console.log('grandparent')
    this.newTodo = todo;
    console.log(this.newTodo)
  }
}
