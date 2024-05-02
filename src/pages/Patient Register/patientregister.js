import React, { useState } from 'react';
import PatientHistory from '../../components/ui/Patient Record Form/patientrecord'
import RegisterForm from '../../components/ui/Personal Profile without buttons/profile';
import Toplogoandbar from '../../components/ui/TopLogoandBar/toplogoandbar';


export default function MainAdminRegister() {
  const [username, setUsername] = useState('Admin');
  const [formData, setFormData] = useState({});

  const handleFormChange = (changedValues, allValues) => {
    setFormData(allValues);
  };

  return (
    
    <div className="container">
      <div>
    <Toplogoandbar searchbar="Search Patient..."  titlepage="Patient Profile" /> 
    </div>
    <div style={{ marginTop : '20px',paddingTop: '20px', paddingBottom: '20px', paddingLeft: '20px', paddingRight: '20px', backgroundColor: 'white', borderRadius: '10px' }}>
    <RegisterForm />
   </div>
   <div style={{ marginTop : '20px',paddingTop: '20px', paddingBottom: '20px', paddingLeft: '20px', paddingRight: '20px', backgroundColor: 'white', borderRadius: '10px' }}>
    <PatientHistory />
    </div>     
    </div>
    
  );
}
