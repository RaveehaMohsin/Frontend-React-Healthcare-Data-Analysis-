import React, { useState } from 'react';
import { Table, Dropdown, Menu, Button } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import DepartmentEditModal from '../../../components/ui/ModalOfAddDepartment/adddepartmentModal'
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const DepartmentDataTable = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const handleEditClick = (record) => {
    setSelectedDepartment(record);
    setIsModalVisible(true);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    setSelectedDepartment(null);
  };

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    .hospital-data-table-container {
      overflow-x: auto;
      font-family: 'Poppins', sans-serif;
    }

    .hospital-data-table-container table {
      width: 100%;
      border-collapse: collapse;
    }

    .hospital-data-table-container th,
    .hospital-data-table-container td {
      padding: 8px;
      border: 1px solid transparent;
      text-align: left;
      font-family: 'Poppins', sans-serif;
      font-size: 11px;
    }

    .hospital-icon {
      display: flex;
      align-items: center;
    }

    .hospital-icon img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-right: 10px;
    }

    .action-button {
      border: 1px solid #ddd; /* Add border to the action button */
    }
  `;

  const columns = [
    {
        title: '#',
        dataIndex: 'AppointmentID',
        sorter: true,
        width: '10%',
      },
    {
      title: 'Doctor ID',
      dataIndex: 'DoctorID',
      width: '10%',
    },
    {
      title: 'Patient ID',
      dataIndex: 'Patient ID',
      width: '15%',     
    },
    {
        title: 'Date Assigned',
        dataIndex: 'DateAssigned',
        width: '15%',
  
        
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      render: (_, record) => (
        <Dropdown
          overlay={
            <Menu>
        <Menu.Item key="view">
          <Link to={`/hospitaladmindepartmentview`}>View</Link>
          {/* <Link to={`/hospitaladmindepartmentview/${record.HospitalID}`}>View</Link>--This is the correct line for backend */}
        </Menu.Item>
        </Menu>         
          }
        >
          <Button className="action-button" icon={<EllipsisOutlined />} type="text" />
        </Dropdown>
      ),
      width: '10%',
    }
  ];

  const sampleData = [
    {
      key: '1',
      AppointmentID: 'A001',
      DoctorID: 'D001',
      'Patient ID': 'P001',
      DateAssigned: '2024-04-30',
    },
    {
      key: '2',
      AppointmentID: 'A002',
      DoctorID: 'D002',
      'Patient ID': 'P001', // Same patient ID
      DateAssigned: '2024-04-28',
    },
    {
      key: '3',
      AppointmentID: 'A003',
      DoctorID: 'D003',
      'Patient ID': 'P001', // Same patient ID
      DateAssigned: '2024-04-26',
    },
    {
      key: '4',
      AppointmentID: 'A004',
      DoctorID: 'D004',
      'Patient ID': 'P001', // Same patient ID
      DateAssigned: '2024-04-24',
    },
  ];
  

  return (
    <div className="hospital-data-table-container">
      <style>{styles}</style>
      <Table
        columns={columns}
        dataSource={sampleData}
        rowKey="key"
        pagination={false}
        scroll={{ x: '100%' }}
        style={{ width: '100%' }}
      />
      {/* Edit Hospital Modal */}
      {selectedDepartment && (
        <DepartmentEditModal
          Title="Update Department"
          show={isModalVisible}
          onHide={handleModalCancel}
          department={selectedDepartment}
        />
      )}
    </div>
  );
};

export default DepartmentDataTable;
