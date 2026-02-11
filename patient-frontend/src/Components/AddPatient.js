import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PatientService from "../Services/PatientService.js";
import Gender from "../Components/Gender.js";
import "../CSS/Add.css";

const AddPatient = () => {
  const navigate = useNavigate();

  const [patient, setPatient] = useState({
    fullName: "",
    age: "",
    gender: "MALE",
    insuranceProvider: "",
    policyNumber: "",
    doctorName: ""
  });

  function handleChange(e) {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  }

 const handleSubmit = (e) => {
    e.preventDefault();

    PatientService.addPatient(patient)
      .then(() => {
        alert("Patient added successfully");
        navigate("/");
      })
      .catch(err => {
        console.error(err);
        alert("Failed to add patient");
      });
  };
  return (
    <div className="row justify-content-center">
      <div className="col-12 col-sm-10 col-md-6 col-lg-5">
        <div className="form-container">
          <h3>Add New Patient</h3>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={patient.fullName}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="age"
              placeholder="Age"
              value={patient.age}
              onChange={handleChange}
              required
            />

            <select
              name="gender"
              value={patient.gender}
              onChange={handleChange}
            >
              <option value={Gender.MALE}>Male</option>
              <option value={Gender.FEMALE}>Female</option>
              <option value={Gender.OTHER}>Other</option>
            </select>

            <input
              type="text"
              name="insuranceProvider"
              placeholder="Insurance Provider"
              value={patient.insuranceProvider}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="policyNumber"
              placeholder="Policy Number"
              value={patient.policyNumber}
              onChange={handleChange}
            />

            <input
              type="text"
              name="doctorName"
              placeholder="Handling Doctor"
              value={patient.doctorName}
              onChange={handleChange}
              required
            />

            <button type="submit" className="btn btn-success w-100">
              Add Patient
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPatient;
