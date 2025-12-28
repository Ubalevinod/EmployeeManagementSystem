package com.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Employee;
import com.repository.EmployeeRepository;
import com.service.EmailService;

@RestController
@CrossOrigin(origins="*")
public class BirthDayWishingController {
	
	@Autowired
	private EmployeeRepository employeerepository;
	
	@Autowired
	private EmailService emailService;
	
	@GetMapping("/sendBirthdayEmails")
	public String sendBirthdayEmailManually()
	{
		LocalDate today = LocalDate.now();
		List<Employee> employees = employeerepository.findEmployeeWithBirthdayToday();
		
		for(Employee emp : employees)
		{
			if(emp.getEmail()!=null && emp.getFirstname()!=null)
			{ 
				emailService.sendBirthdayEmail(emp.getEmail(), emp.getFirstname());
			}
			
		}
		
		return "Birthday emails send successfully (if any birthdays today)";
	}
	
	

}
