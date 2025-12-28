package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.DTO.UserDTO;
import com.entity.User;
import com.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	UserRepository uresp;
	
	public String registration(User u) {
	User u1	= uresp.findByUsername(u.getUsername());
	if(u1==null) {
		uresp.save(u);
		return "User registration successful";
	}
	else {
		return "Please enter another username";
	}
	}
	
	public User login(UserDTO dto) {
		 User u = uresp.findByUsername(dto.getUsername());
		 if(u!=null) {
			 if(u.getPassword().equals(dto.getPassword())){
				 return u;
				 
			 }
				 
		 }
		 return null;
		 
		 
		
	}
	
	
	

}
