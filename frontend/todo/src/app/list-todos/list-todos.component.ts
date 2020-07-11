import { Router } from '@angular/router';
import { TodoDataService } from './../service/data/todo-data.service';
import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number, 
    public description: string, 
    public done: boolean, 
    public targetDate: Date
    ) {
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {

  message: string
  todos: Todo[]
  // [
  //   new Todo(0,'Learn sth new', false, new Date()),
  //   new Todo(1, 'Learn to dance', false, new Date()),
  //   new Todo(2, 'Learn Angular', false, new Date()),
  //   new Todo(3, 'Visit India', true, new Date())
  // ]

  constructor(
    private todoService:TodoDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.refreshTodos()
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('in28minutes').subscribe(
      response =>{
        this.todos = response;
      }
    )
  }

  deleteTodo(id){
    console.log(`Delete todo ${id}`)
    this.todoService.deleteTodo('in28minutes', id).subscribe(
      response =>{
        console.log(response);
        this.message = `Delete of todo ${id} successful`
        this.refreshTodos()
      }
    )
  }

  updateTodo(id){
    console.log(`update todo ${id}`)
    this.router.navigate(['todos', id])
  }

}
