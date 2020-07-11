import { Todo } from './../../list-todos/list-todos.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllTodos(username){
    return this.http.get<Todo[]>(`http://localhost:8080/user/${username}/todos`)
  }

  deleteTodo(username, id){
    return this.http.delete(`http://localhost:8080/user/${username}/todos/${id}`)
  }

  retrieveTodo(username, id){
    return this.http.get<Todo>(`http://localhost:8080/user/${username}/todos/${id}`)
  }

}
