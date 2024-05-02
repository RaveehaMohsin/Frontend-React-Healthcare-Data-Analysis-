import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Input, DatePicker, Select, Space } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEye } from '@fortawesome/free-solid-svg-icons';

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
      <h1 className="text-lg font-semibold mb-2">Personal Info</h1>
        <Form.Item
          label="First Name"
          name="firstname"
          rules={[
            { required: true, message: 'Please input!' },
            { pattern: /^[A-Za-z]+$/, message: 'Please enter only alphabetical characters!' },
          ]}
          style={{ display: 'inline-block', width: 'calc(100% - 10px)' }}
        >
          <Input />
        </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastname"
            rules={[
              { required: true, message: 'Please input!' },
              { pattern: /^[A-Za-z]+$/, message: 'Please enter only alphabetical characters!' },
            ]}
            style={{ display: 'inline-block', width: 'calc(100% - 10px)' }}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Gender"
            name="gender"
            rules={[{ message: 'Please select your gender!' }]}
            style={{ display: 'inline-block', width: 'calc(100% - 8px)' }}
          >
            <Select>
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[{ message: 'Please input!' }]}
            style={{ display: 'inline-block', width: 'calc(100% - 8px)' }}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            label="CNIC"
            name="cnic"
            rules={[
              { required: true, message: 'Please input!' },
              { pattern: /^[0-9]+$/, message: 'Please enter only numerical characters!' },
            ]}
            style={{ display: 'inline-block', width: 'calc(100% - 10px)' }}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Contact"
            name="contact"
            rules={[
              { message: 'Please input!' },
              { pattern: /^[0-9]+$/, message: 'Please enter only numerical characters!' },
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
            label="Date of Birth"
            name="dob"
            rules={[{ required: true, message: 'Please input!' }]}
            style={{ display: 'inline-block', width: 'calc(100% - 10px)' }}
          >
            <DatePicker style={{ width: '100%' }}  />
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

