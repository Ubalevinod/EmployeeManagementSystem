package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Employee;
import com.service.EmployeeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class EmployeeController {
	@Autowired
    EmployeeService employeeService;

    // Add new employee
    @PostMapping("/add")
    public String addEmployee(@RequestBody Employee employee) {
        return employeeService.addemp(employee);
    }

    // Get all employees
    @GetMapping("/all")
    public List<Employee> getAllEmployees() {
        return employeeService.findallemp();
    }

    // Get employee by ID
    @GetMapping("/{id}")
    public Employee getEmployeeById(@PathVariable("id") int empId) {
        return employeeService.findbyempid(empId);
    }

    // Delete employee by ID
    @DeleteMapping("/delete/{empid}")
    public String deleteEmployeeById(@PathVariable int empid) {
        return employeeService.deleteempbyid(empid);
    }

    // Update employee by ID
    @PutMapping("/update/{id}")
    public String updateEmployee(@PathVariable("id") int empId, @RequestBody Employee newEmployee) {
        return employeeService.updateemp(empId, newEmployee);
    }

    // Find employee by first name
    @GetMapping("/firstname/{firstname}")
    public List<Employee> getEmployeesByFirstName(@PathVariable String firstname) {
        return employeeService.findempbyfirstname(firstname);
    }

    // Find employee by last name
    @GetMapping("/lastname/{lastname}")
    public List<Employee> getEmployeesByLastName(@PathVariable String lastname) {
        return employeeService.findbylastname(lastname);
    }

    // Find employee by designation
    @GetMapping("/designation/{designation}")
    public List<Employee> getEmployeesByDesignation(@PathVariable String designation) {
        return employeeService.findbydesignation(designation);
    }

    // Find employee by department
    @GetMapping("/department/{dept}")
    public List<Employee> getEmployeesByDepartment(@PathVariable String dept) {
        return employeeService.findbydept(dept);
    }

	
	
	
	
}

