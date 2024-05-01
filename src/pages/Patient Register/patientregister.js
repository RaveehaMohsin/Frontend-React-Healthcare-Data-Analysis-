import React, { useEffect } from 'react';
import RegisterForm from '../../components/ui/Form Register/registerForm';
import RecordForm from '../../components/ui/Patient Record Form/patientrecord';
import SymptomForm from '../../components/ui/Patient Symptoms Form/patientsymptoms';
import { Button, Space } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEye } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const PatientRegister = () => {
  useEffect(() => {
    // Axios GET request to fetch data from the backend
    axios.get('http://localhost:8081/')
      .then(res => console.log(res)) 
      .catch(err => console.log(err)); 
  }, []); 

  return (
    <>
      <div className="container" style={{ height: 'calc(100vh - 80px)', overflowY: 'scroll' }}>
        <div style={{ padding: '20px' }}>
          <h1 className="text-center" style={{ fontWeight: 'bold', color: '#333' }}>
            Patient Details
          </h1>
          <div style={{ width: '100%' }}>
            <RegisterForm />
          </div>

          <h1 className="text-center" style={{ fontWeight: 'bold', color: '#333', paddingTop: '40px' }}>
            Patient Record
          </h1>
          <div style={{ width: '100%' }}>
            <RecordForm />
          </div>

          <h1 className="text-center" style={{ fontWeight: 'bold', color: '#333', paddingTop: '40px' }}>
            Patient Symptoms
          </h1>
          <div style={{ width: '100%' }}>
            <SymptomForm />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
          <Button
            style={{ width: '50%', height: '48px', color: 'white', backgroundColor: 'rgba(137, 190, 197, 1)' }}
            icon={<FontAwesomeIcon icon={faPlus} />}
          >
            Add Details
          </Button>
          <Space width="10px" />
          <Button
            style={{ width: '50%', height: '48px', color: 'white', backgroundColor: 'rgba(137, 190, 197, 1)' }}
            icon={<FontAwesomeIcon icon={faEye} />}
          >
            View Profile
          </Button>
        </div>
      </div>
    </>
  );
};

export default PatientRegister;
