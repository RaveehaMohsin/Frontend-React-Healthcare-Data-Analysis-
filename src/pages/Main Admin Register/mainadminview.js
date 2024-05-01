import React, { useState , useEffect } from 'react';
import { FaUser, FaKey } from 'react-icons/fa';
import pic from '../../assets/male.png';
import Toplogoandbar from '../../components/ui/TopLogoandBar/toplogoandbar';
import PersonalForm from "../../components/ui/PersonalRecordForm/personalrecordform"
import ChangePasswordForm from '../../components/ui/ChangePasswordForm/changepasswordform'

export default function Card() {
  const [showPersonalForm, setShowPersonalForm] = useState(false);
  const [showChangePasswordForm, setShowChangePasswordForm] = useState(false);
  const [positionStyle, setPositionStyle] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  const handleButtonClick = (buttonName) => {
    if (buttonName === 'Personal Information') {
      setShowPersonalForm(true);
      setShowChangePasswordForm(false); // Hide Change Password form if it's open
      setPositionStyle({ paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px', position: 'absolute' }); 
    } else if (buttonName === 'Change Password') {
      setShowChangePasswordForm(true);
      setShowPersonalForm(false); // Hide Personal Information form if it's open
      setPositionStyle({ paddingLeft: '20px', paddingRight: '20px', paddingTop: '40px', position: 'absolute' }); 
    } else {
      setShowPersonalForm(false);
      setShowChangePasswordForm(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '175vh' }} >
      <Toplogoandbar searchbar="Search Admin..."  titlepage="Settings" />
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
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">John Smith</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">johnsmith75@gmail.com</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">0300 3647372</span>
          <div className="flex flex-col mt-4 md:mt-6">
            <button className="custom-button" onClick={() => handleButtonClick('Personal Information')}>
              <FaUser className="button-icon" /> Personal Information
            </button>
            <button className="custom-button" onClick={() => handleButtonClick('Change Password')}>
              <FaKey className="button-icon" /> Change Password
            </button>
          </div>
        </div>     
      </div>
      <div >
      {showPersonalForm && <div style={positionStyle } className="absolute z-10"><PersonalForm /> </div>}
      </div>
      <div >
      {showChangePasswordForm && <div style={positionStyle } className="absolute z-10"><ChangePasswordForm /> </div>}
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
