import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { PlusOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import TreatmentDataTable from '../../components/ui/Treatment Data Table/treatmentdatatable';
import ModalTreatment from '../../components/ui/ModalTreatment/modaloftreatmentsadd';
import Toplogoandbar from '../../components/ui/TopLogoandBar/toplogoandbar';


export default function TreatmentCrud() {
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
      <Toplogoandbar searchbar="Search Treatments..."  titlepage="Treatments" />
      
      {/* White container with rounded corners */}
      <div style={{ backgroundColor: 'white', padding: '20px', marginTop: '20px', borderRadius: '10px' }}>
        {/* Search input area */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Input
              placeholder="Search Treatment"
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
        <TreatmentDataTable />
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
      
        <ModalTreatment Title='Add Treatment' show={isModalVisible} onHide={handleModalCancel} />
      
    </div>
  );
}
