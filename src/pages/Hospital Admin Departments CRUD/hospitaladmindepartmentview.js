import React, { useState  , useEffect} from 'react';
import {  FaUserNurse   , FaWheelchair, FaBookMedical, FaChartLine} from 'react-icons/fa';
import pic from '../../assets/departmen1.jpg';
import Toplogoandbar from '../../components/ui/TopLogoandBar/toplogoandbar';
import DoctorsTable from  "../../components/ui/assignedDoctors/assigneddoctorstable"
import Predefinedtreatment from '../../components/ui/Treatment Data Table/treatmentdatatable'
import AnalyticalViewDepartment from '../../components/ui/Analytical View of department/analysisofdepartment'


export default function Card() {
  const [showAnalyticalView, setShowAnalyticalView] = useState(false);
  const [showTotalDoctors, setShowTotalDoctors] = useState(false);
  const [showTotalPatients, setShowTotalPatients] = useState(false);
  const [showPredefinedTreatments, setShowPredefinedTreatments] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);
  
  const [positionStyle, setPositionStyle] = useState({});

  const handleButtonClick = (buttonName) => {
    if (buttonName === 'Total Doctors') {
      setShowTotalDoctors(true);
      setShowAnalyticalView(false); 
      setShowTotalPatients(false);
      setShowPredefinedTreatments(false);
      setPositionStyle({ paddingLeft: '20px', paddingRight: '20px', paddingTop: '45px', position: 'absolute' }); 
    } 
    else if (buttonName === 'Total Patients') {
      setShowTotalDoctors(false);
      setShowAnalyticalView(false); 
      setShowTotalPatients(true);
      setShowPredefinedTreatments(false);
      setPositionStyle({ paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px', position: 'absolute' }); 
    } 
    else if (buttonName === 'Analytical View') {
      setShowTotalDoctors(false);
      setShowAnalyticalView(true);  
      setShowTotalPatients(false);
      setShowPredefinedTreatments(false);
      setPositionStyle({ paddingLeft: '20px', paddingRight: '20px', paddingTop: '45px', position: 'absolute' }); 
    } 
    else if (buttonName === 'Predefined Treatments') {
      setShowTotalDoctors(false);
      setShowAnalyticalView(false);  
      setShowTotalPatients(false);
      setShowPredefinedTreatments(true);
      setPositionStyle({ paddingLeft: '20px', paddingRight: '20px', paddingTop: '45px', position: 'absolute' }); 
    } 
    
    else {     
      setShowTotalDoctors(false);
      setShowAnalyticalView(false);
      setShowTotalPatients(false);
      setShowPredefinedTreatments(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '170vh' }} >
      { <Toplogoandbar searchbar="Search Departments..."  titlepage="City Hospital" />  /*Write respective Hospital name here */}
      <div className="flex flex-wrap" >
      
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10">
        <div className="flex justify-center pt-4">
          <img
            className="w-40 h-40 mb-3 rounded-full shadow-lg" // Increase image size
            src={pic}
            alt="image"            
          />
        </div>
        <div className="flex flex-col items-center pb-10">
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Cardiology</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">www.cityhospital.com</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">0300 3647372</span>
          <div className="flex flex-col mt-4 md:mt-6">
            <button className="custom-button" onClick={() => handleButtonClick('Analytical View')}>
              <FaChartLine className="button-icon" /> Analytical View
            </button>
            <button className="custom-button" onClick={() => handleButtonClick('Total Doctors')}>
              <FaUserNurse className="button-icon" />Total Doctors
            </button>
            <button className="custom-button" onClick={() => handleButtonClick('Total Patients')}>
              <FaWheelchair className="button-icon" />Total Patients
            </button>
            <button className="custom-button" onClick={() => handleButtonClick('Predefined Treatments')}>
              <FaBookMedical className="button-icon" />Predefined Treatments
            </button>
          </div>
        </div>     
      </div>
      <div >
      {showAnalyticalView && <div style={positionStyle} className="absolute z-10"><AnalyticalViewDepartment /> </div>}
      </div>

      <div>
      {showTotalDoctors && <div style={positionStyle } className="absolute z-10"><DoctorsTable /> </div>}
      </div>

      {/* <div>
      {showTotalPatients && <div style={positionStyle } className="absolute z-10">< /> </div>}
      </div> */}

      <div>
       {showPredefinedTreatments && <div style={positionStyle } className="absolute z-10"><Predefinedtreatment /> </div>} {/*here show only that particular department treatments */}
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
