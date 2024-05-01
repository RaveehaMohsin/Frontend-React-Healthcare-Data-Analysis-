import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle, faHospital  , faUserInjured , faUserMd, faHospitalUser , faSignOutAlt , faPills , faNotesMedical, faUsers } from '@fortawesome/free-solid-svg-icons';
import Dashboard from './dashboard';
import './dashboard.css';

const MyDashboard_mainAdmin = () => {
  const itemsData = {
    1: { title: 'Dashboard', link: "/dashboard", icon: <FontAwesomeIcon icon={faHospitalUser} /> },
    2: { title: 'Profile', link: "/hospitaladminregister", icon: <FontAwesomeIcon icon={faUserCircle} /> },
    3: { title: 'Departments', link: "/hospitaladmindepartments", icon: <FontAwesomeIcon icon={faHospital} /> },
    4: { title: 'Unassigned Staff', link: "/hospitaladminunassignedstaff", icon: <FontAwesomeIcon icon={faUsers} /> },
    5: { title: 'Doctors', link: "/hospitaladmindoctors", icon: <FontAwesomeIcon icon={faUserMd} /> },
    6: { title: 'Patients', link: "/hospitaladminpatientview", icon: <FontAwesomeIcon icon={faUserInjured} /> },
    7: { title: 'Predefined Treatments', link: "/hospitaladminpredefinedtreatments", icon: <FontAwesomeIcon icon={faNotesMedical} /> },
    8: { title: 'Medicines', link: "/hospitaladminmedicine", icon: <FontAwesomeIcon icon={faPills} /> },
    9: { title: 'Logout', link: "", icon: <FontAwesomeIcon icon={faSignOutAlt} /> },

    
  };

  return <Dashboard itemsData={itemsData} />;
};

export default MyDashboard_mainAdmin;
