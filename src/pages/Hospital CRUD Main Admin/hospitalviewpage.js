import React, { useState } from 'react';
import { FaHospital, FaHospitalUser  , FaUserNurse , FaAmbulance , FaNotesMedical , FaWheelchair} from 'react-icons/fa';
import pic from '../../assets/hospital2.jpg';
import Toplogoandbar from '../../components/ui/TopLogoandBar/toplogoandbar';
import HospitalinfoForm from  "../../components/ui/viewHospitalInfoForm/viewhospitalinfoform"
import PersonalRecordForm from '../../components/ui/PersonalRecordForm/personalrecordform'
import DepartmentsDataSet from '../../components/ui/HospitalDataTable/hospitaldatatable' //I used the hospitaldata set here only for front end..department data set havent made yet


export default function Card() {
  const [showHospitalForm, setShowHospitalForm] = useState(false);
  const [showPersonalRecordForm, setShowPersonalRecordForm] = useState(false);
  const [showDepartmentsDataSet, setShowDepartmentsDataSet] = useState(false);
  
  const [positionStyle, setPositionStyle] = useState({});

  const handleButtonClick = (buttonName) => {
    if (buttonName === 'Hospital Information') {
      setShowHospitalForm(true);
      setShowPersonalRecordForm(false); 
      setShowDepartmentsDataSet(false);
      setPositionStyle({ paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px', position: 'absolute' }); 
    } 
    else if (buttonName === 'Hospital Admin') {
      setShowPersonalRecordForm(true);
      setShowHospitalForm(false);
      setShowDepartmentsDataSet(false);
      setPositionStyle({ paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px', position: 'absolute' }); 
    } 
    // else if (buttonName === 'Total Doctors') {
    //   setShowPersonalRecordForm(false);
    //   setShowHospitalForm(false); 
    //   setPositionStyle({ paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px', position: 'absolute' }); 
    // } 
    else if (buttonName === 'Total Departments') {
      setShowPersonalRecordForm(false);
      setShowHospitalForm(false); 
      setShowDepartmentsDataSet(true);
      setPositionStyle({marginLeft: '20px', marginRight: '20px', paddingTop: '40px', position: 'absolute' }); 
    }
    // else if (buttonName === 'Medicines') {
    //   setShowPersonalRecordForm(false);
    //   setShowHospitalForm(false); 
    //   setPositionStyle({ paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px', position: 'absolute' }); 
    // }
    // else if (buttonName === 'Total Patients') {
    //   setShowPersonalRecordForm(false);
    //   setShowHospitalForm(false); 
    //   setPositionStyle({ paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px', position: 'absolute' }); 
    // }
    else {
      setShowHospitalForm(false);
      setShowPersonalRecordForm(false);
      setShowDepartmentsDataSet(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '175vh' }} >
      { <Toplogoandbar searchbar="Search Hospitals..."  titlepage="City Hospital" />  /*Write respective hospital name here */}
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
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">City Hospital</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">www.cityhospital.com</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">0300 3647372</span>
          <div className="flex flex-col mt-4 md:mt-6">
            <button className="custom-button" onClick={() => handleButtonClick('Hospital Information')}>
              <FaHospital className="button-icon" /> Hospital Information
            </button>
            <button className="custom-button" onClick={() => handleButtonClick('Hospital Admin')}>
              <FaHospitalUser className="button-icon" />Hospital Admin
            </button>
            <button className="custom-button" onClick={() => handleButtonClick('Total Doctors')}>
              <FaUserNurse className="button-icon" />Total Doctors
            </button>
            <button className="custom-button" onClick={() => handleButtonClick('Total Departments')}>
              <FaAmbulance className="button-icon" />Total Departments
            </button>
            <button className="custom-button" onClick={() => handleButtonClick('Medicines')}>
              <FaNotesMedical className="button-icon" />Medicines
            </button>
            <button className="custom-button" onClick={() => handleButtonClick('Total Patients')}>
              <FaWheelchair className="button-icon" />Total Patients
            </button>
          </div>
        </div>     
      </div>
      <div >
      {showHospitalForm && <div style={positionStyle} className="absolute z-10"><HospitalinfoForm /> </div>}
      </div>

      <div>
      {showPersonalRecordForm && <div style={positionStyle } className="absolute z-10"><PersonalRecordForm /> </div>}
      </div>

      <div>
      {showDepartmentsDataSet && <div style={positionStyle } className="absolute z-10"><DepartmentsDataSet /> </div>}
      </div>

      {/* <div>
      {showPersonalRecordForm && <div style={positionStyle } className="absolute z-10"><PersonalRecordForm /> </div>}
      </div>

      <div>
      {showPersonalRecordForm && <div style={positionStyle } className="absolute z-10"><PersonalRecordForm /> </div>}
      </div>

      <div>
      {showPersonalRecordForm && <div style={positionStyle } className="absolute z-10"><PersonalRecordForm /> </div>}
      </div> */}

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
