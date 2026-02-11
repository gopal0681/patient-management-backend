package com.assignment.patientmanagement.service;

import java.util.List;

import com.assignment.patientmanagement.modals.Patient;


public interface PatientService {

    Patient addPatient(Patient patient);

    List<Patient> getPatients();

    Patient getPatientById(Long id);
    
    void deletePatient(Long id);
}