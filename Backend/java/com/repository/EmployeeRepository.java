package com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.entity.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Integer>{
	
	public List<Employee> findByFirstname(String firstname);
	public List<Employee> findByLastname(String lastname);
	public List<Employee> findByDepartment(String dept);
	public List<Employee> findByDesignation(String designation);
	
	@Query(value = "SELECT * FROM employee WHERE MONTH(dob)= MONTH(CURDATE())"+
	"AND DAY(dob)=DAY(CURDATE())",nativeQuery=true)
	List<Employee> findEmployeeWithBirthdayToday();
	
	

}












