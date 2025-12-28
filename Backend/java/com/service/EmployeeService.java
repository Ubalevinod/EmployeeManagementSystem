package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.Employee;
import com.repository.EmployeeRepository;

@Service
public class EmployeeService {
	
	@Autowired
	EmployeeRepository eresp;
	public String addemp(Employee e) {
		eresp.save(e);
		return "Employee record added successfully";
	}
	
	public List<Employee> findallemp(){
		return eresp.findAll();
	}
	
	public Employee findbyempid(int empid) {
		return eresp.findById(empid) .orElse(null);
	}
	
	public String deleteempbyid(int empid) {
		Employee existingemp = eresp.findById(empid) .orElse(null);
		if(existingemp==null) {
			return "No record found for delete operation.Wrong employee Id";
		}
		else {
			eresp.deleteById(empid);
			return "Employee record deleted successfully";
		}
	}
	
	public String updateemp(int empid,Employee newemp) {
		Employee existingemp = eresp.findById(empid) .orElse(null);
		if(existingemp==null) {
			return "Employee Id does not match with any record. Updation fail";
		}
		if(newemp.getFirstname()==null&&newemp.getLastname()==null&&newemp.getEmail()==null
				&&newemp.getContactno()==0&&newemp.getAddress()==null&&newemp.getDepartment()==null
				&&newemp.getDesignation()==null&&newemp.getDob()==null&&newemp.getExp()==0&&
				newemp.getGender()==null&&newemp.getJoiningdate()==null&&newemp.getProfile()==null
				&&newemp.getReportingmanager()==null&&newemp.getStatus()==null) {
			return "No new record provided for updation";
		}
		if(newemp.getFirstname()!=null) {
			existingemp.setFirstname(newemp.getFirstname());
		}
		if(newemp.getLastname()!=null) {
			existingemp.setLastname(newemp.getLastname());
		}
		if(newemp.getEmail()!=null) {
			existingemp.setEmail(newemp.getEmail());
		}
		if(newemp.getContactno()!=0) {
			existingemp.setContactno(newemp.getContactno());
		}
		if(newemp.getAddress()!=null) {
			existingemp.setAddress(newemp.getAddress());
		}
		if(newemp.getDepartment()!=null) {
			existingemp.setDepartment(newemp.getDepartment());
		}
		if(newemp.getExp()!=0) {
			existingemp.setExp(newemp.getExp());
		}
		if(newemp.getDob()!=null) {
			existingemp.setDob(newemp.getDob());
		}
		if(newemp.getJoiningdate()!=null) {
			existingemp.setJoiningdate(newemp.getJoiningdate());
		}
		if(newemp.getSalary()!=0) {
			existingemp.setSalary(newemp.getSalary());
		}
		if(newemp.getGender()!=null) {
			existingemp.setGender(newemp.getGender());
		}
		if(newemp.getStatus()!=null) {
			existingemp.setStatus(newemp.getStatus());
		}
		if(newemp.getReportingmanager()!=null) {
			existingemp.setReportingmanager(newemp.getReportingmanager());
		}
		if(newemp.getDesignation()!=null) {
			existingemp.setDesignation(newemp.getDesignation());
		}
		if(newemp.getProfile()!=null) {
			existingemp.setProfile(newemp.getProfile());
		}
		
		eresp.save(existingemp);
		return "Employee record updated successfully!";		
	}
	
	public List<Employee> findempbyfirstname(String firstname){
		return eresp.findByFirstname(firstname);
	}
	
	public List<Employee> findbylastname(String lastname){
		return eresp.findByLastname(lastname);
	}
	
	public List<Employee> findbydesignation(String designation){
		return eresp.findByDesignation(designation);
	}
	
	public List<Employee> findbydept(String dept){
		return eresp.findByDepartment(dept);
	}

}











