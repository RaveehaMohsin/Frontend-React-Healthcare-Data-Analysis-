import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { PlusOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import Toplogoandbar from '../../components/ui/TopLogoandBar/toplogoandbar';
import ChartComponent from '../../components/ui/chart/chart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospital, faStethoscope, faHouseMedicalFlag, faBedPulse } from '@fortawesome/free-solid-svg-icons';
import DepartmentDataTable from '../../components/ui/Departments Data Table/departmentsDataTable';
import DepartmentAddModal from '../../components/ui/ModalOfAddDepartment/adddepartmentModal'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

export default function HospitaladmindepartmentsAdd () {
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
      <Toplogoandbar searchbar="Search Departments..." titlepage="Departments" />
      {/* Card Section */}
      <div style={{ marginTop: '10px' }}>
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">

          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <FontAwesomeIcon icon={faHospital} className="h-4 w-4 text-muted-foreground mr-2" />
              <CardTitle className="text-sm font-medium">
                Total Departments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 p-3 rounded-md flex justify-between items-center">
                <div>
                  <ChartComponent />
                </div>
                <div className="text-md font-semibold text-gray-700">
                  +1600
                </div>
              </div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-0">
        <CardHeader className="flex flex-row items-center space-y-0 pb-2">
        <FontAwesomeIcon icon={faHouseMedicalFlag} className="h-4 w-4 text-muted-foreground mr-2" />
        <CardTitle className="text-sm font-medium">
            Popular Departments
        </CardTitle>
        </CardHeader>
        <CardContent>
        <div className="bg-gray-100 p-3 rounded-md flex justify-between items-center">
            <div>
            <ChartComponent backgroundColor="rgb(255, 220, 0)" borderColor="rgb(255, 220, 0)" />
            </div>
            <div className="text-md font-semibold text-gray-700">
            +1250
            </div>
        </div>
        </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-0">
        <CardHeader className="flex flex-row items-center space-y-0 pb-2">
        <FontAwesomeIcon icon={faStethoscope} className="h-4 w-4 text-muted-foreground mr-2" />
        <CardTitle className="text-sm font-medium">
            Cost Analysis
        </CardTitle>
        </CardHeader>
        <CardContent>
        <div className="bg-gray-100 p-3 rounded-md flex justify-between items-center">
            <div>
            <ChartComponent backgroundColor="rgb(76, 187, 23)" borderColor="rgb(76, 187, 23)" />
            </div>
            <div className="text-md font-semibold text-gray-700">
            +130
            </div>
        </div>
        </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-0">
        <CardHeader className="flex flex-row items-center space-y-0 pb-2">
        <FontAwesomeIcon icon={faBedPulse} className="h-4 w-4 text-muted-foreground mr-2" />
        <CardTitle className="text-sm font-medium">
            Patient Experience
        </CardTitle>
        </CardHeader>
        <CardContent>
        <div className="bg-gray-100 p-3 rounded-md flex justify-between items-center">
            <div>
            <ChartComponent backgroundColor="rgb(255, 102, 102)" borderColor="rgb(255, 102, 102)" />
            </div>
            <div className="text-md font-semibold text-gray-700">
            +600
            </div>
        </div>
        </CardContent>
        </Card>
        </div>
      </div>
      {/* Departments Data Table */}
      <div>
        <div style={{ backgroundColor: 'white', padding: '20px', marginTop: '20px', borderRadius: '10px' }}>
          {/* Search input area */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Input
                placeholder="Search Departments"
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
          <DepartmentDataTable />
        </div>
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


    
      </div>
      <DepartmentAddModal Title='Add Department' show={isModalVisible} onHide={handleModalCancel} />

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
    </div>
  );
}
