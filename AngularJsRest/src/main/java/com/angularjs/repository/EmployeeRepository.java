	package com.angularjs.repository;

	import org.springframework.data.jpa.repository.JpaRepository;

	import com.angularjs.model.Employee;



	public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
		Employee findByName(String name);
	}