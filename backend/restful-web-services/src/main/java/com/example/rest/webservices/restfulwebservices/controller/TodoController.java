package com.example.rest.webservices.restfulwebservices.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.rest.webservices.restfulwebservices.models.Todo;
import com.example.rest.webservices.restfulwebservices.service.TodoHardcodedService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class TodoController {
	
	@Autowired
	private TodoHardcodedService todoService;
	
	@GetMapping("/user/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username){
		return todoService.findAll();
	}
	
	@DeleteMapping("/user/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(
			@PathVariable String username, 
			@PathVariable long id){
		
		Todo todo = todoService.deleteById(id);
		if(todo!=null) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}
	
	@GetMapping("/user/{username}/todos/{id}")
	public Todo getTodo(
			@PathVariable String username, 
			@PathVariable long id){
		return todoService.findById(id);
	}

}
