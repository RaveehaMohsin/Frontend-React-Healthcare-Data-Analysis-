import React, { useState } from 'react';
import { Table, Dropdown, Menu, Button } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import hospitalpic from '../../../assets/hospital.png';
import ModalEdit from '../../ui/ModalOfAddHospital/addhospitalModal';
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
      dataIndex: 'HospitalID',
      sorter: true,
      width: '10%',
    },
    {
      title: 'Name',
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
      title: 'Admin ID',
      dataIndex: 'AdminID',
      width: '10%',
    },
    {
      title: 'Website',
      dataIndex: 'Website',
      width: '10%',
    },
    {
      title: 'Location',
      dataIndex: 'Location',
      width: '15%',
    },
    {
      title: 'Contact',
      dataIndex: 'Contact',
      width: '10%',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      render: (_, record) => (
        <Dropdown
          overlay={
            <Menu>
        <Menu.Item key="edit" onClick={() => handleEditClick(record)}>Edit</Menu.Item>
        <Menu.Item key="view">
          <Link to={`/mainadminhospitalview`}>View</Link>
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
      key: '1',
      HospitalID: '001',
      AdminID: 'A001',
      Name: 'Sample Hospital 1',
      Location: 'City A',
      Website: 'www.samplehospital1.com',
      Contact: '1234567890',
      image: hospitalpic,
    },
    {
      key: '2',
      HospitalID: '002',
      AdminID: 'A002',
      Name: 'Sample Hospital 2',
      Location: 'City B',
      Website: 'www.samplehospital2.com',
      Contact: '9876543210',
      image: hospitalpic,
    },
    {
      key: '3',
      HospitalID: '003',
      AdminID: 'A003',
      Name: 'Sample Hospital 3',
      Location: 'City C',
      Website: 'www.samplehospital3.com',
      Contact: '9279372292',
      image: hospitalpic,
    },
    // More sample data rows here
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
          Title="Update Hospital"
          show={isModalVisible}
          onHide={handleModalCancel}
          hospital={selectedHospital}
        />
      )}
    </div>
  );
};

export default HospitalDataTable;
