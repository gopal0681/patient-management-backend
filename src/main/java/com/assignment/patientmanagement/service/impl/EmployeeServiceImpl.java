package com.assignment.employeemanagement.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.assignment.employeemanagement.modals.Employee;
import com.assignment.employeemanagement.repositary.EmployeeRepository;
import com.assignment.employeemanagement.service.EmployeeService;


@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository res;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.res = employeeRepository;
    }
    @Override
    public Employee addEmployee(Employee employee) {
        return res.save(employee);
    }


    @Override
    public List<Employee> getEmployees() {
        return res.findAll();
    }

    
    @Override
    public Employee getEmployeeById(Long id) {
        return res.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found with id: " + id));
    }
    
    @Override
    public void deletemployee(Long id) {

        Employee employee = res.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Employee not found with id: " + id));

        		res.delete(employee);
    }

}
