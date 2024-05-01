import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Input, DatePicker, Select, Space } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEye, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const { Option } = Select;

export default function PersonalRecordForm() {
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
      <div >
      <Form className='bgcolor' form={form} name="validateOnly" layout="vertical" autoComplete="off">
      <h1 className="text-lg font-semibold mb-2">Hospital Info</h1>
        <Form.Item
          label="Admin Name"
          name="adminname"
          rules={[
            { required: true, message: 'Please input!' },
            { pattern: /^[A-Za-z]+$/, message: 'Please enter only alphabetical characters!' },
          ]}
          style={{ display: 'inline-block', width: 'calc(100% - 10px)' }}
        >
          <Input />
        </Form.Item>

          <Form.Item
            label="Hospital Name"
            name="name"
            rules={[
              { required: true, message: 'Please input!' },
              { pattern: /^[A-Za-z]+$/, message: 'Please enter only alphabetical characters!' },
            ]}
            style={{ display: 'inline-block', width: 'calc(100% - 10px)' }}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Location"
            name="location"
            rules={[              
              {  message: 'Please enter location' },
            ]}
            style={{ display: 'inline-block', width: 'calc(100% - 10px)' }}
          >
            <Input />
          </Form.Item>

          
          <Form.Item
            label="Website"
            name="website"
            rules={[
              {  message: 'Please input!' },
              { type: 'url', message: 'Please enter a valid url!' },
            ]}
            style={{ display: 'inline-block', width: 'calc(100% - 10px)' }}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please input!' },
              { type: 'email', message: 'Please enter a valid email address!' },
            ]}
            style={{ display: 'inline-block', width: 'calc(100% - 10px)' }}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Contact"
            name="contact"
            rules={[
              { required: true, message: 'Please input!'  },
              { pattern: /^[0-9]+$/, message: 'Please enter only numerical characters!' },
            ]}
            style={{ display: 'inline-block', width: 'calc(100% - 10px)' }}
          >
            <Input />
          </Form.Item>


          <Form.Item
            label="Zip Code"
            name="zipcode"
            rules={[{ message: 'Please input!' }, { pattern: /^[0-9]+$/, message: 'Please enter only numerical characters!' }]}
            style={{ display: 'inline-block', width: 'calc(100% - 10px)' }}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="State"
            name="state"
            rules={[{ message: 'Please input!' }, { pattern: /^[A-Za-z]+$/, message: 'Please enter only alphabetical characters!' }]}
            style={{ display: 'inline-block', width: 'calc(100% - 10px)' }}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="City"
            name="city"
            rules={[{required: true, message: 'Please input!' }, { pattern: /^[A-Za-z]+$/, message: 'Please enter only alphabetical characters!' }]}
            style={{ display: 'inline-block', width: 'calc(100% - 10px)' }}
          >
            <Input />
          </Form.Item>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
          <Button
            onClick={handleAddDetails}
            style={{ width: '100%', height: '48px', color: 'white', backgroundColor: 'rgba(137, 190, 197, 1)' }}
            icon={<FontAwesomeIcon icon={faArrowLeft} />}
          >
            Back
          </Button>
          <Space width="10px" />
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

