import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { PlusOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import MedicineDataTable from '../../components/ui/MedicineDataTable/medicinedatatable';
import ModalMedicine from '../../components/ui/ModalofMedcine/medicineaddmodal';
import Toplogoandbar from '../../components/ui/TopLogoandBar/toplogoandbar';
import ChartComponent from '../../components/ui/chart/chart'; // Import your ChartComponent
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCapsules , faPrescriptionBottle , faFirstAid , faPills, faMedkit} from '@fortawesome/free-solid-svg-icons';

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
      <Toplogoandbar searchbar="Search Medicines..."  titlepage="Medicines" />
      {/* Cards */}
      <div style={{marginTop:'20px'}}>
      <div className="grid gap-4 md:grid-cols-2 md:gap-10 lg:grid-cols-3">

      <Card x-chunk="dashboard-01-chunk-0">
      <CardHeader className="flex flex-row items-center space-y-0 pb-2">
        <FontAwesomeIcon icon={faCapsules } className="h-4 w-4 text-muted-foreground mr-2" />
        <CardTitle className="text-sm font-medium">
          Total Medicines
        </CardTitle>
      </CardHeader>
      <CardContent>
      <div className="bg-gray-100 p-4 rounded-md flex justify-between items-center">
        <div>
          +200
        </div>
        <div className="text-md font-semibold text-gray-700">
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', border: '2px solid rgb(255, 165, 0)', borderRadius: '4px', backgroundColor: 'rgb(255, 165, 0)' }}>
          <FontAwesomeIcon icon={faPills} style={{ color: 'white' }} />
        </div>
      </div>
      </div>
    </CardContent>
    </Card>

    <Card x-chunk="dashboard-01-chunk-0">
    <CardHeader className="flex flex-row items-center space-y-0 pb-2">
      <FontAwesomeIcon icon={faPrescriptionBottle} className="h-4 w-4 text-muted-foreground mr-2" />
      <CardTitle className="text-sm font-medium">
        Popular Medicines
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="bg-gray-100 p-3 rounded-md flex justify-between items-center">
        <div>
        <ChartComponent />
        </div>
        <div className="text-md font-semibold text-gray-700">
          +15
        </div>
      </div>
    </CardContent>
    </Card>

    <Card x-chunk="dashboard-01-chunk-0">
      <CardHeader className="flex flex-row items-center space-y-0 pb-2">
        <FontAwesomeIcon icon={faFirstAid} className="h-4 w-4 text-muted-foreground mr-2" />
        <CardTitle className="text-sm font-medium">
          Total Expenditure
        </CardTitle>
      </CardHeader>
      <CardContent>
     <div className="bg-gray-100 p-4 rounded-md flex justify-between items-center">
        <div>
          +150000
        </div>
        <div className="text-md font-semibold text-gray-700">
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', border: '2px solid rgb(0, 128, 0)', borderRadius: '4px', backgroundColor: 'rgb(0, 128, 0)' }}>
          <FontAwesomeIcon icon={faMedkit} style={{ color: 'white' }} />
        </div>
      </div>
      </div>
    </CardContent>
    </Card>

    </div>
    </div>
      {/* White container with rounded corners */}
      <div style={{ backgroundColor: 'white', padding: '20px', marginTop: '20px', borderRadius: '10px' }}>
        {/* Search input area */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Input
              placeholder="Search Medicine"
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
        <MedicineDataTable />
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
      
        <ModalMedicine Title='Add Medicine' show={isModalVisible} onHide={handleModalCancel} />
      
    </div>
  );
}
