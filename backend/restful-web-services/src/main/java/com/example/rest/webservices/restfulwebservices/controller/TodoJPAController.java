package com.example.rest.webservices.restfulwebservices.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.rest.webservices.restfulwebservices.models.Todo;
import com.example.rest.webservices.restfulwebservices.service.TodoHardcodedService;
import com.example.rest.webservices.restfulwebservices.service.TodoJPARepository;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class TodoJPAController {
	
	@Autowired
	private TodoJPARepository todoService;
	
	@GetMapping("/jpa/user/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username){
		return todoService.findByUsername(username);
	}
	
	@DeleteMapping("/jpa/user/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(
			@PathVariable String username, 
			@PathVariable long id){
		
		todoService.deleteById(id);

		return ResponseEntity.noContent().build();

	}
	
	@GetMapping("/jpa/user/{username}/todos/{id}")
	public Todo getTodo(
			@PathVariable String username, 
			@PathVariable long id){
		return todoService.findById(id).get();
	}
	
	@PostMapping("/jpa/user/{username}/todos")
	public ResponseEntity<Void> addTodo(
			@PathVariable String username, @RequestBody Todo todo){
		
		todo.setUsername(username);
		Todo createdTodo = todoService.save(todo);
		
		URI uri = ServletUriComponentsBuilder
				.fromCurrentRequest()
				.path("/{id}")
				.buildAndExpand(createdTodo.getId())
				.toUri();
		
		return ResponseEntity.created(uri).build();
	}
	
	@PutMapping("/jpa/user/{username}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(
			@PathVariable String username, 
			@PathVariable long id, @RequestBody Todo todo){
		
		Todo updatedTodo = todoService.save(todo);
		return new ResponseEntity<Todo>(updatedTodo, HttpStatus.OK);
	}
}
