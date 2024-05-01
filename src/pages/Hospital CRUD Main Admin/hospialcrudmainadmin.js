import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { PlusOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import HospitalDataTable from '../../components/ui/HospitalDataTable/hospitaldatatable';
import ModalHospital from '../../components/ui/ModalOfAddHospital/addhospitalModal';
import Toplogoandbar from '../../components/ui/TopLogoandBar/toplogoandbar';

export default function HospitalCrudMainAdmin() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddClick = () => {
    setIsModalVisible(true);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      {/* Header */}
      <Toplogoandbar searchbar="Search Hospital..."  titlepage="Hospitals" />
      {/* White container with rounded corners */}
      <div style={{ backgroundColor: 'white', padding: '20px', marginTop: '20px', borderRadius: '10px' }}>
        {/* Search input area */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Input
              placeholder="Search hospitals"
              style={{
                fontFamily: 'Poppins, sans-serif',
                color: 'grey',
                width: '300px',
                backgroundColor: 'transparent',
                borderColor: 'lightgrey',
                borderWidth: '1px',
                borderStyle: 'solid',
                marginRight: '10px',
              }}
            />
          </div>
          {/* Back button with icon */}
          <Button type="primary" style={{ backgroundColor: 'rgb(137, 190, 197, 1)', width: '120px' }} icon={<ArrowLeftOutlined style={{ color: 'white' }} />} >Back</Button>
        </div>

        {/* Hospital data table */}
        <HospitalDataTable />
      </div>

            {/* Circle button with plus icon */}
            <div style={{ position: 'relative' }}>
          <div style={{ position: 'fixed', bottom:20 , right: 70 }}>
          <Button
            type="primary"
            shape="circle"           
            style={{
              width: '60px', 
              height: '60px', 
              fontSize: '32px', 
              backgroundColor: 'rgb(137, 190, 197, 1)',
              color: 'white',
              boxShadow: '0 0 20px rgba(137, 190, 197, 1)', 
              animation: 'moveUpDown 0.4s infinite alternate',
            }}
            icon={<PlusOutlined style={{ color: 'white' }} />}
            onClick={handleAddClick}
          />
           </div>

        </div>
        <style>{`
          @keyframes moveUpDown {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-10px); /* Adjust the value to control the movement distance */
            }
          }
        `}</style>


        <ModalHospital Title='Add Hospital' show={isModalVisible} onHide={handleModalCancel} />
      
    </div>
  );
}
