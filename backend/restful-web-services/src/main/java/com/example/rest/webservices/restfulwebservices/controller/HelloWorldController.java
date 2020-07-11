package com.example.rest.webservices.restfulwebservices.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.rest.webservices.restfulwebservices.models.HelloWorldBean;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class HelloWorldController {
	
	//@RequestMapping(method=RequestMethod.GET, path = "/hello-world")
	@GetMapping("/hello-world")
	public String helloWorld() {
		return "Hello world";
	}
	
	
	@GetMapping("/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		//throw new RuntimeException("An error happened! ");
		return new HelloWorldBean("Hello macarena");
	}
	
	@GetMapping("/hello-world/path-variable/{name}")
	public HelloWorldBean helloWorldBeanPathVariable(@PathVariable String name) {
		//throw new RuntimeException("An error happened! ");
		return new HelloWorldBean(String.format("Hello world, %s", name));
	}

}
