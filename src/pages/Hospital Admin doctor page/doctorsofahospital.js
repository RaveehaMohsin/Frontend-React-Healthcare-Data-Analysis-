import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import DoctorsDataTable from '../../components/ui/assignedDoctors/assigneddoctorstable';
import Toplogoandbar from '../../components/ui/TopLogoandBar/toplogoandbar';
import ChartComponent from '../../components/ui/chart/chart'; // Import your ChartComponent
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faStethoscope, faUserNurse  } from '@fortawesome/free-solid-svg-icons';

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
      <Toplogoandbar searchbar="Search Doctors..."  titlepage="Doctors" />
      {/* Cards */}
      <div style={{marginTop:'20px'}}>
      <div className="grid gap-4 md:grid-cols-2 md:gap-10 lg:grid-cols-3">

      <Card x-chunk="dashboard-01-chunk-0">
    <CardHeader className="flex flex-row items-center space-y-0 pb-2">
      <FontAwesomeIcon icon={faUserMd} className="h-4 w-4 text-muted-foreground mr-2" />
      <CardTitle className="text-sm font-medium">
        Total Doctors
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="bg-gray-100 p-3 rounded-md flex justify-between items-center">
        <div>
        <ChartComponent backgroundColor="rgb(255, 102, 102)" borderColor="rgb(255, 102, 102)" />
        </div>
        <div className="text-md font-semibold text-gray-700">
          +1500
        </div>
      </div>
    </CardContent>
    </Card>

    <Card x-chunk="dashboard-01-chunk-0">
    <CardHeader className="flex flex-row items-center space-y-0 pb-2">
      <FontAwesomeIcon icon={faStethoscope } className="h-4 w-4 text-muted-foreground mr-2" />
      <CardTitle className="text-sm font-medium">
        Popular Doctors
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="bg-gray-100 p-3 rounded-md flex justify-between items-center">
        <div>
        <ChartComponent backgroundColor="rgb(255, 220, 0)" borderColor="rgb(255, 220, 0)" />
        </div>
        <div className="text-md font-semibold text-gray-700">
          +150
        </div>
      </div>
    </CardContent>
    </Card>

    <Card x-chunk="dashboard-01-chunk-0">
    <CardHeader className="flex flex-row items-center space-y-0 pb-2">
      <FontAwesomeIcon icon={faUserNurse} className="h-4 w-4 text-muted-foreground mr-2" />
      <CardTitle className="text-sm font-medium">
        Active Doctors
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="bg-gray-100 p-3 rounded-md flex justify-between items-center">
        <div>
        <ChartComponent backgroundColor="rgb(76, 187, 23)" borderColor="rgb(76, 187, 23)" />
        </div>
        <div className="text-md font-semibold text-gray-700">
          +45
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
              placeholder="Search Doctors"
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
        <DoctorsDataTable />
      </div>
      
    </div>
  );
}
