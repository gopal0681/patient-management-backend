import React from "react"; 
import "../CSS/StatsModal.css";

const StatsModal = ({ patient, onClose }) => {
  if (!patient) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Patient Details</h3>

        <div className="details-grid">
          <div><strong>Name:</strong> {patient.fullName}</div>
          <div><strong>Age:</strong> {patient.age}</div>
          <div><strong>Gender:</strong> {patient.gender}</div>
          <div><strong>Doctor:</strong> {patient.doctorName}</div>
          <div><strong>Insurance:</strong> {patient.insuranceProvider}</div>
          <div><strong>Policy No:</strong> {patient.policyNumber}</div>
        </div>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default StatsModal;
