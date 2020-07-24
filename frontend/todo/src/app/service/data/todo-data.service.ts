import { TODO_JPA_URL } from './../../app.constants';
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
    return this.http.get<Todo[]>(`${TODO_JPA_URL}/user/${username}/todos`)
  }

  deleteTodo(username, id){
    return this.http.delete(`${TODO_JPA_URL}/user/${username}/todos/${id}`)
  }

  retrieveTodo(username, id){
    return this.http.get<Todo>(`${TODO_JPA_URL}/user/${username}/todos/${id}`)
  }

  updateTodo(username, id, todo){
    return this.http.put(`${TODO_JPA_URL}/user/${username}/todos/${id}`,todo)
  }

  createTodo(username, todo){
    return this.http.post(`${TODO_JPA_URL}/user/${username}/todos`,todo)
  }

}
