package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.LeaveApplication;
import com.repository.LeaveApplicationRepository;

@Service
public class LeaveApplicationService {
	
	@Autowired
	private LeaveApplicationRepository repo;
	
	public String saveLeave(LeaveApplication leave) {
		leave.setStatus("PENDING");
		repo.save(leave);
		return "You applied for leave successfully!";
		}
	
	public List<LeaveApplication> getAllLeaves(){
		return repo.findAll();	
		}
	
	public String updateLeave(int id,LeaveApplication leaveupdate) {
		LeaveApplication existingleave = repo.findById(id) .orElse(null);
		
		if(existingleave==null) {
			return "No leave data found";
		}
		if(leaveupdate.getEmployeeName()==null&&leaveupdate.getFromDate()==null&&
				leaveupdate.getReason()==null&&leaveupdate.getToDate()==null) {
			return "no leave updates found";
		}
		if(leaveupdate.getEmployeeName()!=null) {
			existingleave.setEmployeeName(leaveupdate.getEmployeeName());
		}
		if(leaveupdate.getReason()!=null) {
			existingleave.setReason(leaveupdate.getReason());
		}
		if(leaveupdate.getFromDate()!=null) {
			existingleave.setFromDate(leaveupdate.getFromDate());
		}
		if(leaveupdate.getToDate()!=null) {
			existingleave.setToDate(leaveupdate.getToDate());
		}
		repo.save(existingleave);
		
		return "leave updated successfully";
	}
	
	public String deleteLeave(int id) {
		LeaveApplication existingleave = repo.findById(id) .orElse(null);
		
		if(existingleave==null) {
			return "No leave found to delete";
		}
		else {
			repo.deleteById(id);
			return "Leave cancelled successfully";
		}
	}
	
	public List<LeaveApplication> getLeavesByEmployeeId(int empId){
		return repo.findByEmployeeId(empId);
	}

	public String updateleavestatus(int id,String action) {
		LeaveApplication existingleave = repo.findById(id) .orElse(null);
		if(existingleave!=null) {
			existingleave.setStatus(action);
			repo.save(existingleave);
			
			return "Leave status updated successfully";
		}
		else {
			return "error";
		}
		
	}
	

}
