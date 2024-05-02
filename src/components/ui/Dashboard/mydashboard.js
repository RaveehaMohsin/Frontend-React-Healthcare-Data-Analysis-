// MyDashboard.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWheelchair, faStethoscope, faSignOutAlt, faHospitalUser, faPrescriptionBottleMedical, faFaceDizzy } from '@fortawesome/free-solid-svg-icons';
import Dashboard from '../Dashboard/dashboard';
import './dashboard.css';

const MyDashboard = () => {
  const itemsData = {
    1: { title: 'Dashboard', link: "/dashboard", icon: <FontAwesomeIcon icon={faHospitalUser} /> },
    2: { title: 'Register', link: "/patientRegister", icon: <FontAwesomeIcon icon={faWheelchair} /> },
    3: { title: 'Symptoms', link: "/patientSymptoms", icon: <FontAwesomeIcon icon={faFaceDizzy} /> },
    4: { title: 'Treatment', link: "/patientTreatment", icon: <FontAwesomeIcon icon={faStethoscope} /> },
    5: { title: 'Medical Records', link: "/patientMedicalRecord", icon: <FontAwesomeIcon icon={faPrescriptionBottleMedical} /> },
    6: { title: 'Logout', link: "/patientLogout", icon: <FontAwesomeIcon icon={faSignOutAlt} /> },
  };

  return <Dashboard itemsData={itemsData} />;
};

export default MyDashboard;
