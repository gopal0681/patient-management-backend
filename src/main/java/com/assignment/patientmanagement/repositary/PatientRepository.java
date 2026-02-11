package com.assignment.patientmanagement.repositary;

import org.springframework.data.jpa.repository.JpaRepository;

import com.assignment.patientmanagement.modals.Patient;

public interface PatientRepository extends JpaRepository<Patient, Long> {
}