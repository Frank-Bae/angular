import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service'
import { Todo } from 'src/app/models/Todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  // Set Dyanmic Classes
  setClasses() {
    let classes = {
      //the todo: true tells that the class todo will be applied
      //but mainly use this for conditional, and if you want a class,
      //just put it with class
      'todo': true,
      //the is-complete is a conditionally based class, what you want to use it for
      'is-complete': this.todo.completed
    }
    return classes;
  }

  onToggle(todo) {
    // Toggle in UI
    todo.completed = !todo.completed
    // TOggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo))
  }

  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }
}
