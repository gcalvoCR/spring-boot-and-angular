package com.example.rest.webservices.restfulwebservices.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.rest.webservices.restfulwebservices.models.Todo;

@Service
public class TodoHardcodedService {
	
	private static List<Todo> todos = new ArrayList();
	private static int idCounter = 0;
	
	static {
		todos.add(new Todo(++idCounter, "in28minutes", "Create a cypress course", new Date(), false));
		todos.add(new Todo(++idCounter, "in28minutes", "Learn abour Microservices", new Date(), false));
		todos.add(new Todo(++idCounter, "in28minutes", "Learn Angular", new Date(), false));	
	}
	
	public List<Todo> findAll(){
		return todos;
	}
	
	public Todo deleteById(long id) {
		Todo todo = findById(id);
		if(todo==null) return null;
		
		todos.remove(todo);
		return todo;
	}

	public Todo findById(long id) {
		for (Todo todo: todos) {
			if(todo.getId()==id) {
				return todo;
			}
		}
		return null;
	}
	
	
}
