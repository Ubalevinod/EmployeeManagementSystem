package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.entity.LeaveApplication;
import com.service.LeaveApplicationService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class LeaveApplicationController {
	
	@Autowired
	LeaveApplicationService service;
	
	@PostMapping("/apply")
	public String addleave(@RequestBody LeaveApplication leave) {
		return service.saveLeave(leave);
	}
	
	@PutMapping("/updateleave/{leaveid}")
	public String updateleave(@PathVariable int leaveid,@RequestBody LeaveApplication newleave)
	{
		return service.updateLeave(leaveid, newleave);
	}
	
	@GetMapping("/findallleavedetails")
	public List<LeaveApplication> findallleaves(){
		return service.getAllLeaves();
	}
	
	@GetMapping("/getleavedetailsbyempid/{empid}")
	public List<LeaveApplication> findleavesbyempid(@PathVariable int empid){
		return service.getLeavesByEmployeeId(empid);
	}
	
	@PutMapping("/updatestatus/{id}/{action}")
	public String updatestatus(@PathVariable int id, @PathVariable String action) {
		return service.updateleavestatus(id, action);
	}
	
	@DeleteMapping("/cancel/{id}")
	public String deleteleavebyid(@PathVariable int id ) {
		return service.deleteLeave(id);
	}
	
	

}
