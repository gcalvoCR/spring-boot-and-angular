package com.example.rest.webservices.restfulwebservices.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.rest.webservices.restfulwebservices.models.AuthenticationBean;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class BasicAuthenticationController {
	
	@GetMapping("/basicauth")
	public AuthenticationBean login() {
		//throw new RuntimeException("An error happened! ");
		return new AuthenticationBean("You are authenticated");
	}
	
}
