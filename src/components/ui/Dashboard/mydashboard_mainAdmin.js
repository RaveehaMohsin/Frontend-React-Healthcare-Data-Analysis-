import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle, faHospital  , faFileMedical , faHospitalUser } from '@fortawesome/free-solid-svg-icons';
import Dashboard from './dashboard';
import './dashboard.css';

const MyDashboard_mainAdmin = () => {
  const itemsData = {
    1: { title: 'Dashboard', link: "/dashboard", icon: <FontAwesomeIcon icon={faHospitalUser} /> },
    2: { title: 'Profile', link: "/mainadminregister", icon: <FontAwesomeIcon icon={faUserCircle} /> },
    3: { title: 'Hospitals', link: "/mainadminhospitalmanagement", icon: <FontAwesomeIcon icon={faHospital} /> },
    4: { title: 'Records', link: "", icon: <FontAwesomeIcon icon={faFileMedical} /> },
    
  };

  return <Dashboard itemsData={itemsData} />;
};

export default MyDashboard_mainAdmin;
