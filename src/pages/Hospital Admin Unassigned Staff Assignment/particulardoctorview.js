import React, { useState , useEffect} from 'react';
import { FaUser , FaGraduationCap} from 'react-icons/fa';
import pic from '../../assets/doctor.jpg';
import Toplogoandbar from '../../components/ui/TopLogoandBar/toplogoandbar';
import QualificationForm from  "../../components/ui/DoctorQualificationform/qualificationform"
import PersonalRecordForm from '../../components/ui/PersonalRecordForm/personalrecordform'


export default function Card() {
  const [showQualificationForm, setShowQualificationForm] = useState(false);
  const [showPersonalRecordForm, setShowPersonalRecordForm] = useState(false);

  const [positionStyle, setPositionStyle] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  const handleButtonClick = (buttonName) => {
    if (buttonName === 'Qualification') {
      setShowQualificationForm(true);
      setShowPersonalRecordForm(false); 
      setPositionStyle({ paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px', position: 'absolute' }); 
    } 
    else if (buttonName === 'Personal Profile') {
      setShowPersonalRecordForm(true);
      setShowQualificationForm(false);
      setPositionStyle({ paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px', position: 'absolute' }); 
    } 
    
    else {
      setShowQualificationForm(false);
      setShowPersonalRecordForm(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '175vh' }} >
      { <Toplogoandbar searchbar="Search Doctors..."  titlepage="Doctor Profile" />  /*Write respective doctor name here */}
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
            <button className="custom-button" onClick={() => handleButtonClick('Personal Profile')}>
              <FaUser className="button-icon" />Personal Profile
            </button>
            <button className="custom-button" onClick={() => handleButtonClick('Qualification')}>
              <FaGraduationCap  className="button-icon" />Qualification
            </button>
          </div>
        </div>     
      </div>
      <div >
      {showQualificationForm && <div style={positionStyle} className="absolute z-10"><QualificationForm /> </div>}
      </div>

      <div>
      {showPersonalRecordForm && <div style={positionStyle } className="absolute z-10"><PersonalRecordForm /> </div>}
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

