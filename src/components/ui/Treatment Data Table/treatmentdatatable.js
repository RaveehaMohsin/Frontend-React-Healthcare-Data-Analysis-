import React, { useState } from 'react';
import { Table, Dropdown, Menu, Button } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import hospitalpic from '../../../assets/treatment1.jpg';
import ModalEdit from '../../ui/ModalTreatment/modaloftreatmentsadd';

const TreatmentDataTable = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState(null);  //this is for medicine selection

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
      dataIndex: 'treatmentID',
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
      title: 'Description',
      dataIndex: 'description',
      width: '15%',
    },
    {
        title: 'Department',
        dataIndex: 'departmentID',
        width: '15%',
      },

    {
      title: 'Cost',
      dataIndex: 'cost',
      width: '10%',
    },
    {
      title: 'Duration',
      dataIndex: 'duration',
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
      treatmentID: 1,
      Name: 'Physical Therapy',
      description: 'Rehabilitation exercises and therapies',
      departmentID: 'Orthopedics',
      cost: '$100',
      duration: '1 hour',
    },
    {
      treatmentID: 2,
      Name: 'Cardiac Rehabilitation',
      description: 'Exercise and lifestyle education for heart patients',
      departmentID: 'Cardiology',
      cost: '$150',
      duration: '45 minutes',
    },
    {
      treatmentID: 3,
      Name: 'Psychological Counseling',
      description: 'Therapeutic counseling sessions',
      departmentID: 'Psychiatry',
      cost: '$120',
      duration: '50 minutes',
    },
    // Add more rows as needed
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
          Title="Update Treatment"
          show={isModalVisible}
          onHide={handleModalCancel}
          medicine={selectedHospital}
        />
      )}
    </div>
  );
};

export default TreatmentDataTable;
