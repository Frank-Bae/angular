import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../../models/Todos'
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Output() sendToGrandparent: EventEmitter<Todo> = new EventEmitter();

  todos: Todo[];

  //The constructor is where you want to initialize your services
  //We can use todoService anywhere in this class
  constructor(private todoService: TodoService ) { }

  //You have to subscribe to the observable since it is asynchornus, like promises
  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo) {
    console.log('delete me')
    this.sendToGrandparent.emit(todo)
    console.log(todo)
  }
}
