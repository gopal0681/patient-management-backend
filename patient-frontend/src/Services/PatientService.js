import axios from "axios";

console.log(process.env.REACT_APP_BASE_URL);

const BASE_URL = `${process.env.REACT_APP_API_URL}/api/patients`;

class PatientService {
    getPatients() {
        return axios.get(BASE_URL);
    }
    addPatient(patient) {
        return axios.post(BASE_URL, patient);
    }
    getPatientById(patientId) {
        return axios.get(`${BASE_URL}/${patientId}`);
    }
    deletePatient(patientId) {
        return axios.delete(`${BASE_URL}/${patientId}`);
    }
}

export default new PatientService();
