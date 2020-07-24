package com.example.rest.webservices.restfulwebservices.service;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.rest.webservices.restfulwebservices.models.Todo;

@Repository
public interface TodoJPARepository extends JpaRepository<Todo, Long>{
	
	List<Todo> findByUsername(String username);

}
