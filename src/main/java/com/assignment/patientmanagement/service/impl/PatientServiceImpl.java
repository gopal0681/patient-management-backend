package com.assignment.patientmanagement.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.assignment.patientmanagement.modals.Patient;
import com.assignment.patientmanagement.repositary.PatientRepository;
import com.assignment.patientmanagement.service.PatientService;


@Service
public class PatientServiceImpl implements PatientService {

    @Autowired
    private PatientRepository res;

    public PatientServiceImpl(PatientRepository patientRepository) {
        this.res = patientRepository;
    }
    @Override
    public Patient addPatient(Patient patient) {
        return res.save(patient);
    }


    @Override
    public List<Patient> getPatients() {
        return res.findAll();
    }

    
    @Override
    public Patient getPatientById(Long id) {
        return res.findById(id)
                .orElseThrow(() -> new RuntimeException("Patient not found with id: " + id));
    }

}
