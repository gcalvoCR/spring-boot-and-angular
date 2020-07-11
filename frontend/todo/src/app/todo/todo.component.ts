import { ActivatedRoute } from '@angular/router';
import { TodoDataService } from './../service/data/todo-data.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number
  todo: Todo

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute, 
  ) { }

  ngOnInit(): void {
    this.todo = new Todo(1,"", false, new Date())
    this.getTodo()
  }

  getTodo(){
    this.id = this.route.snapshot.params['id'];
    this.todoService.retrieveTodo('in28minutes', this.id)
    .subscribe(data => this.todo = data)
  }

  saveTodo(){}

}
