import React, { useState } from 'react';
import {Link } from 'react-router-dom';
import { Button, Form, Input, Select, Space } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const { Option } = Select;

export default function PersonalRecordForm(props) {
  const [formData, setFormData] = useState({});

  const handleAddDetails = () => {
    console.log('Add Details button clicked');
    console.log(formData);
  };

  const handleFormChange = (changedValues, allValues) => {
    setFormData(allValues);
  };

  const PatientRecord = () => {
    const [form] = Form.useForm(); // Create a form instance

    return (
      <div>
      <Form className='bgcolor' form={form} name="validateOnly" layout="vertical" autoComplete="off">
      <h1 className="text-lg font-semibold mb-2">Qualification Info</h1>
        <Form.Item
          label="Qualification"
          name="Qualification"
          rules={[
            {  message: 'Please input Qualification!' },
          ]}
          style={{ display: 'inline-block', width: 'calc(100% - 10px)' }}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Specialization"
          name="Specialization"
          rules={[
            { required: true, message: 'Please input Specialization!' },
            {  message: 'Please enter Specialization!' },
          ]}
          style={{ display: 'inline-block', width: 'calc(100% - 10px)' }}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Experience"
          name="Experience"
          rules={[
            {  message: 'Please enter Experience!' },
          ]}
          style={{ display: 'inline-block', width: 'calc(100% - 10px)' }}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="License Number"
          name="LicenseNumber"
          rules={[
            { required:true, message: 'Please enter License Number!' },
          ]}
          style={{ display: 'inline-block', width: 'calc(100% - 10px)' }}
        >
          <Input />
        </Form.Item>

    

          <Form.Item
            label="Consultation Fee"
            name="ConsultationFee"
            rules={[
              { required: true, message: 'Please input!' },
              { pattern: /^[0-9]+$/, message: 'Please enter only numerical characters!' },
            ]}
            style={{ display: 'inline-block', width: 'calc(100% - 10px)' }}
          >
            <Input />
          </Form.Item>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
          <Space width="10px" />
          <div style={{ width: '100%' }}>
          <Link to="/hospitaladminunassignedstaff">         
              <Button
                style={{ width: '100%', height: '48px', color: 'white', backgroundColor: 'rgba(137, 190, 197, 1)' }}
                icon={<FontAwesomeIcon icon={faArrowLeft} />}
              >
                Back
              </Button>
          
          </Link>
          </div>
        </div>
      </Form>
      </div>
    );
  };
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

       
        .ant-form-item-label {
          font-family: 'Poppins', sans-serif;
          font-weight: 400; 
          font-size: 20px;
        }
        .ant-input {
          font-family: 'Poppins', sans-serif;
          
        }
      `}</style>
      <PatientRecord />
    </>
  );
}


