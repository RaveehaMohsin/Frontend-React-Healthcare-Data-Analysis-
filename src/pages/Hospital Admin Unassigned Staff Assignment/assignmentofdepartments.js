import React, { useState ,useEffect } from 'react';
import { Input, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import UsassignedDoctorsTable from '../../components/ui/UnassignedDoctosTable/usassignedstaff';

import Toplogoandbar from '../../components/ui/TopLogoandBar/toplogoandbar';




export default function Assignmentofdepartments() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      {/* Header */}
      <Toplogoandbar searchbar="Search Users..."  titlepage="Unassigned Users" />
      {/* White container with rounded corners */}
      <div style={{ backgroundColor: 'white', padding: '20px', marginTop: '20px', borderRadius: '10px' }}>
        {/* Search input area */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Input
              placeholder="Search Users"
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
        <UsassignedDoctorsTable />
      </div>

        
      
    </div>
  );
}
