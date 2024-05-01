import React, { useState } from 'react';
import { Table, Dropdown, Menu, Button } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import hospitalpic from '../../../assets/doctor.jpg';
import ModalEdit from '../../ui/ModalAssignDepartment/assignDepartmentModal';
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
      dataIndex: 'DoctorID',
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
      title: 'Email',
      dataIndex: 'Email',
      width: '10%',
    },
    {
      title: 'Contact',
      dataIndex: 'Contact',
      width: '10%',
    },
    {
      title: 'Qualification',
      dataIndex: 'Qualification',
      width: '15%',
    },
    {
      title: 'Experience',
      dataIndex: 'Experience',
      width: '10%',
    },
    {
        title: 'Specialization',
        dataIndex: 'Specialization',
        width: '10%',
      },
    {
      title: 'Actions',
      dataIndex: 'actions',
      render: (_, record) => (
        <Dropdown
          overlay={
            <Menu>
        <Menu.Item key="edit" onClick={() => handleEditClick(record)}>Assign</Menu.Item>
        <Menu.Item key="view">
          <Link to={`/hospitaladminunassigneduserviews`}>View</Link>
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
      DoctorID: 1,
      Name: 'Dr. John Doe',
      Email: 'johndoe@example.com',
      Contact: '+1-234-567-8901',
      Qualification: 'MD, MBBS',
      Experience: '10 years',
      Specialization: 'Cardiology',
    },
    {
      DoctorID: 2,
      Name: 'Dr. Jane Smith',
      Email: 'janesmith@example.com',
      Contact: '+1-345-678-9012',
      Qualification: 'MD, MBBS',
      Experience: '8 years',
      Specialization: 'Orthopedics',
    },
    {
      DoctorID: 3,
      Name: 'Dr. Emily Johnson',
      Email: 'emilyjohnson@example.com',
      Contact: '+1-456-789-0123',
      Qualification: 'MD, MBBS',
      Experience: '12 years',
      Specialization: 'Pediatrics',
    },
    {
      DoctorID: 4,
      Name: 'Dr. Mark Wilson',
      Email: 'markwilson@example.com',
      Contact: '+1-567-890-1234',
      Qualification: 'MD, MBBS',
      Experience: '15 years',
      Specialization: 'Dermatology',
    },
    {
      DoctorID: 5,
      Name: 'Dr. Sarah Brown',
      Email: 'sarahbrown@example.com',
      Contact: '+1-678-901-2345',
      Qualification: 'MD, MBBS',
      Experience: '7 years',
      Specialization: 'Neurology',
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
      {selectedHospital && (
        <ModalEdit
          Title="Assign Department"
          show={isModalVisible}
          onHide={handleModalCancel}
          hospital={selectedHospital}
        />
      )}
    </div>
  );
};

export default HospitalDataTable;
