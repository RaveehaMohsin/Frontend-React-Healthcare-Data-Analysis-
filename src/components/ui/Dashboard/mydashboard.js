// MyDashboard.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWheelchair, faStethoscope, faFileInvoiceDollar, faHospitalUser, faPrescriptionBottleMedical, faReceipt } from '@fortawesome/free-solid-svg-icons';
import Dashboard from '../Dashboard/dashboard';
import './dashboard.css';

const MyDashboard = () => {
  const itemsData = {
    1: { title: 'Dashboard', link: "/patientDashboard", icon: <FontAwesomeIcon icon={faHospitalUser} /> },
    2: { title: 'Register', link: "/patientRegister", icon: <FontAwesomeIcon icon={faWheelchair} /> },
    3: { title: 'Treatment', link: "/patientTreatment", icon: <FontAwesomeIcon icon={faStethoscope} /> },
    4: { title: 'Prescription', link: "/patientPrescription", icon: <FontAwesomeIcon icon={faPrescriptionBottleMedical} /> },
    5: { title: 'Invoices', link: "/patientInvoices", icon: <FontAwesomeIcon icon={faFileInvoiceDollar} /> },
    6: { title: 'Payments', link: "/patientPayments", icon: <FontAwesomeIcon icon={faReceipt} /> },
  };

  return <Dashboard itemsData={itemsData} />;
};

export default MyDashboard;
