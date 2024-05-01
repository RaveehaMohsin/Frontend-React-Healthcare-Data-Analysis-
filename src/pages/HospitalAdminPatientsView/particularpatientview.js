import React, { useState , useEffect} from 'react';
import { FaUser , FaUserInjured, FaChartArea,  FaCalendarAlt, FaHeartbeat, FaMoneyCheck} from 'react-icons/fa';
import pic from '../../assets/patient.jpg';
import Toplogoandbar from '../../components/ui/TopLogoandBar/toplogoandbar';
import PersonalRecordForm from '../../components/ui/PersonalRecordForm/personalrecordform'
import PatientRecord from '../../components/ui/Patient Record Form/patientrecord'
import PatientInvoice from '../../components/ui/Patient Invoive Table/patientinvoicetable'
import AnalyticalView from '../../components/ui/HospitalAdminDoctorViewAnalyticalView/doctorAnalysis'
import PaientAppointment from '../../components/ui/Appointment Table Patients/appointmenttablepatient'
import PatientMedicalRecord from '../../components/ui/Medical Record of a Patient/medicalrecord'


export default function Card() {
  const [showHealthForm, setShowHealthForm] = useState(false);
  const [showPersonalRecordForm, setShowPersonalRecordForm] = useState(false);
  const [showInvoices, setShowInvoices] = useState(false);
  const [showAnalyticalView, setShowAnalyticalView] = useState(false);
  const [showAppointment, setShowAppointment] = useState(false);
  const [showMedicalRecord, setShowMedicalRecord] = useState(false);

  const [positionStyle, setPositionStyle] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  const handleButtonClick = (buttonName) => {
    if (buttonName === 'Health Information') {
      setShowHealthForm(true);
      setShowPersonalRecordForm(false); 
      setShowInvoices(false);
      setShowAnalyticalView(false);
      setShowAppointment(false);
      setShowMedicalRecord(false);
      setPositionStyle({ paddingLeft: '20px', paddingRight: '20px' ,paddingTop: '20px', position: 'absolute',width: '840px', }); 
    } 
    else if (buttonName === 'Personal Profile') {
      setShowPersonalRecordForm(true);
      setShowHealthForm(false);
      setShowInvoices(false);
      setShowAnalyticalView(false);
      setShowAppointment(false);
      setShowMedicalRecord(false);
      setPositionStyle({ paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px', position: 'absolute' }); 
    }
    else if (buttonName === 'Invoices') {
        setShowPersonalRecordForm(false);
        setShowHealthForm(false);
        setShowInvoices(true);
        setShowAnalyticalView(false);
        setShowAppointment(false);
        setShowMedicalRecord(false);
        setPositionStyle({ paddingLeft: '20px', paddingRight: '20px', paddingTop: '40px', position: 'absolute' }); 
      } 
      else if (buttonName === 'Analytical View') {
        setShowPersonalRecordForm(false);
        setShowHealthForm(false);
        setShowInvoices(false);
        setShowAnalyticalView(true);
        setShowAppointment(false);
        setShowMedicalRecord(false);
        setPositionStyle({ paddingLeft: '20px', paddingRight: '20px', paddingTop: '45px', position: 'absolute' }); 
      }
      else if (buttonName === 'Appointments') {
        setShowPersonalRecordForm(false);
        setShowHealthForm(false);
        setShowInvoices(false);
        setShowAnalyticalView(false);
        setShowAppointment(true);
        setShowMedicalRecord(false);
        setPositionStyle({ paddingLeft: '20px', paddingRight: '20px', paddingTop: '40px', position: 'absolute' }); 
      }
      else if (buttonName === 'Medical Record') {
        setShowPersonalRecordForm(false);
        setShowHealthForm(false);
        setShowInvoices(false);
        setShowAnalyticalView(false);
        setShowAppointment(false);
        setShowMedicalRecord(true);
        setPositionStyle({ paddingLeft: '20px', paddingRight: '20px', paddingTop: '40px', position: 'absolute' }); 
      }
    
    else {
      setShowHealthForm(false);
      setShowPersonalRecordForm(false);
      setShowInvoices(false);
      setShowAnalyticalView(false);
      setShowAppointment(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '230vh' }} >
      { <Toplogoandbar searchbar="Search Patient..."  titlepage="Patient Profile" />  /*Write respective patient name here */}
      <div className="flex flex-wrap" >
      
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10">
        <div className="flex justify-center pt-4">
          <img
            className="w-32 h-32 mb-3 rounded-full shadow-lg" // Increase image size
            src={pic}
            alt="image"
          />
        </div>
        <div className="flex flex-col items-center pb-10">
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">John Doe</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">johndoe@example.com</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">0300 3647372</span>
          <div className="flex flex-col mt-4 md:mt-6">
          <button className="custom-button" onClick={() => handleButtonClick('Analytical View')}>
              <FaChartArea className="button-icon" />Analytical View
            </button>
            <button className="custom-button" onClick={() => handleButtonClick('Personal Profile')}>
              <FaUser className="button-icon" />Personal Profile
            </button>
            <button className="custom-button" onClick={() => handleButtonClick('Health Information')}>
              <FaHeartbeat  className="button-icon" />Health Information
            </button>
            <button className="custom-button" onClick={() => handleButtonClick('Medical Record')}>
              <FaUserInjured  className="button-icon" />Medical Record
            </button>
            <button className="custom-button" onClick={() => handleButtonClick('Appointments')}>
              <FaCalendarAlt  className="button-icon" />Appointments
            </button>
            <button className="custom-button" onClick={() => handleButtonClick('Invoices')}>
              <FaMoneyCheck  className="button-icon" />Invoices
            </button>
          </div>
        </div>     
      </div>
      <div >
      {showHealthForm && <div style={positionStyle} className="absolute z-10"><PatientRecord /> </div>}
      </div>

      <div>
      {showPersonalRecordForm && <div style={positionStyle } className="absolute z-10"><PersonalRecordForm /> </div>}
      </div>   

      <div>
      {showInvoices && <div style={positionStyle } className="absolute z-10"><PatientInvoice /> </div>}
      </div> 

      <div>
      {showAnalyticalView && <div style={positionStyle } className="absolute z-10"><AnalyticalView /> </div>}
      </div>

      <div>
      {showAppointment && <div style={positionStyle  } className="absolute z-10"><PaientAppointment /> </div>}
      </div>

      <div>
      {showMedicalRecord && <div style={positionStyle  } className="absolute z-10"><PatientMedicalRecord /> </div>}
      </div>

      </div> 
      <style>
        {`
          /* Internal CSS for button styling */
          .custom-button {
            background-color: #f0f0f0;
            color: black;
            font-family: 'Poppins', sans-serif;
            font-size: 12px;           
            padding: 8px 16px;
            border-radius: 4px;
            border: none;
            outline: none;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            margin-bottom: 8px;
            transition: background-color 0.3s ease;
            width: 250px;
          }

          .custom-button:hover {
            background-color: rgb(137, 190, 197, 0.5);
            color: white;
          }

          .button-icon {
            transform: translateY(10px);
          }
        `}
      </style>
    </div>
  );
}


