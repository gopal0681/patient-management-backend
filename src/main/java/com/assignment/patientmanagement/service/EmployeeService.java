package com.assignment.employeemanagement.service;

import java.util.List;

import com.assignment.employeemanagement.modals.Employee;


public interface EmployeeService {

    Employee addEmployee(Employee employee);

    List<Employee> getEmployees();

    Employee getEmployeeById(Long id);
    
    void deleteEmployee(Long id);
}