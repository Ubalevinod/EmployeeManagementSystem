package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.DTO.UserDTO;
import com.entity.User;
import com.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {
	
	@Autowired
	UserService uservice;
	
	@PostMapping("/register")
	public String register(@RequestBody User u) {
		return uservice.registration(u);
	}
	
	@PostMapping("/login")
	public ResponseEntity<?>login(@RequestBody UserDTO dto){
		
		if(dto.getUsername().equals("admin")&&dto.getPassword().equals("admin@1234"))
		{
			User adminuser=new User();
			adminuser.setUsername("admin");
			adminuser.setPassword("admin@1234");
			adminuser.setRole("admin");
			return ResponseEntity.ok(adminuser);
		}
		
		else {
		
		
		
		User u = uservice.login(dto);
		if(u!=null) {
			return ResponseEntity.ok(u);
		}
		else {
			return ResponseEntity
					.status(HttpStatus.UNAUTHORIZED)
					.body("Invalid Username or Password");
		}
	}
	}
}
