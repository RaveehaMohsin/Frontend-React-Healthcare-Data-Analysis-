import React, { useState } from 'react';
import { Table, Dropdown, Menu, Button } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import hospitalpic from '../../../assets/patient.jpg';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const HospitalDataTable = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState(null);

  const handleEditClick = (record) => {
    setSelectedHospital(record);
    setIsModalVisible(true);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    setSelectedHospital(null);
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
      dataIndex: 'PatientID',
      sorter: true,
      width: '10%',
    },
    {
      title: 'First Name',
      dataIndex: 'Name',
      width: '15%',
      render: (text, record) => (
        <div className="hospital-icon">
          <img src={hospitalpic} alt="Hospital Icon" />
          {text}
        </div>
      ),
    },
    {
        title: 'Last Name',
        dataIndex: 'lastname',
        width: '10%',
      },

    {
      title: 'Email',
      dataIndex: 'email',
      width: '10%',
    },
    {
        title: 'Contact',
        dataIndex: 'contact',
        width: '10%',
    },
    {
        title: 'Date of Birth',
        dataIndex: 'dob',
        width: '10%',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      render: (_, record) => (
        <Dropdown
          overlay={
            <Menu>
        <Menu.Item key="view">
          <Link to={`/hospitaladminparticularpatientview`}>View</Link>
          {/* <Link to={`/mainadminhospitalview/${record.HospitalID}`}>View</Link>--This is the correct line for backend */}
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
      PatientID: 101,
      Name: 'John',
      lastname: 'Doe',
      email: 'john.doe@example.com',
      contact: '+1 (123) 456-7890',
      dob: '1990-05-15',
    },
    {
      PatientID: 102,
      Name: 'Jane',
      lastname: 'Smith',
      email: 'jane.smith@example.com',
      contact: '+1 (234) 567-8901',
      dob: '1985-10-20',
    },
    {
      PatientID: 103,
      Name: 'Michael',
      lastname: 'Johnson',
      email: 'michael.johnson@example.com',
      contact: '+1 (345) 678-9012',
      dob: '1978-03-12',
    },
    {
      PatientID: 104,
      Name: 'Emily',
      lastname: 'Brown',
      email: 'emily.brown@example.com',
      contact: '+1 (456) 789-0123',
      dob: '1995-12-28',
    },
    {
      PatientID: 105,
      Name: 'William',
      lastname: 'Wilson',
      email: 'william.wilson@example.com',
      contact: '+1 (567) 890-1234',
      dob: '1982-07-08',
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
    </div>
  );
};

export default HospitalDataTable;
