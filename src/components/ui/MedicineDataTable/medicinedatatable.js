import React, { useState } from 'react';
import { Table, Dropdown, Menu, Button } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import hospitalpic from '../../../assets/medicine4.jpg';
import ModalEdit from '../../ui/ModalofMedcine/medicineaddmodal';

const MedicineDataTable = () => {
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
      dataIndex: 'MedicineID',
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
      title: 'Manufacturer',
      dataIndex: 'manufacturer',
      width: '10%',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      width: '10%',
    },
    {
      title: 'Dosage',
      dataIndex: 'dosage',
      width: '10%',
    },
    {
        title: 'Stock',
        dataIndex: 'stock',
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
        <Menu.Item key="delete">Delete</Menu.Item>
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
      MedicineID: 1,
      Name: 'Paracetamol',
      description: 'Pain reliever and fever reducer',
      manufacturer: 'ABC Pharmaceuticals',
      price: '$5.99',
      dosage: '500mg',
      stock: 100,
    },
    {
      MedicineID: 2,
      Name: 'Amoxicillin',
      description: 'Antibiotic used to treat bacterial infections',
      manufacturer: 'XYZ Pharma',
      price: '$10.50',
      dosage: '250mg',
      stock: 50,
    },
    {
      MedicineID: 3,
      Name: 'Lisinopril',
      description: 'Blood pressure medication',
      manufacturer: 'Generic Drugs Inc.',
      price: '$8.25',
      dosage: '10mg',
      stock: 75,
    },
    {
      MedicineID: 4,
      Name: 'Atorvastatin',
      description: 'Lipid-lowering medication',
      manufacturer: 'PharmaCorp',
      price: '$12.75',
      dosage: '20mg',
      stock: 30,
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
          Title="Update Medicine"
          show={isModalVisible}
          onHide={handleModalCancel}
          medicine={selectedHospital}
        />
      )}
    </div>
  );
};

export default MedicineDataTable;
