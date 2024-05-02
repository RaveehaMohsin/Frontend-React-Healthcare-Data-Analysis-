import React, { useState } from 'react';
import { Button, Form, Input, DatePicker, Select, Space } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowLeft} from '@fortawesome/free-solid-svg-icons';

const { Option } = Select;

export default function HospitalAdminOfficeForm(props) {
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
        <div style={{ marginTop : '20px',paddingTop: '20px', paddingBottom: '20px', paddingLeft: '20px', paddingRight: '20px', backgroundColor: 'white', borderRadius: '10px' , width : '800px' }}>
      <Form className='bgcolor' form={form} name="validateOnly" layout="vertical" autoComplete="off">
      <h1 className="text-lg font-semibold mb-2">Workplace Information</h1>

      <Form.Item
            label="Office Location"
            name="officelocation"
            rules={[
              { message: 'Please input!' },
              ,
            ]}
            style={{ display: 'inline-block', width: 'calc(100% - 10px)' }}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Join Date"
            name="joindate"
            rules={[{ message: 'Please input!' }]}
            style={{ display: 'inline-block', width: 'calc(100% - 10px)' }}
          >
            <DatePicker style={{ width: '100%' }}  />
          </Form.Item>

          <Form.Item
            label="Salary"
            name="salary"
            rules={[
              { required: true, message: 'Please input!' },
              { pattern: /^[0-9]+$/, message: 'Please enter only numerical characters!' },
            ]}
            style={{ display: 'inline-block', width: 'calc(100% - 10px)' }}
          >
            <Input />
          </Form.Item>


          <Form.Item
            label="Notes"
            name="notes"
            rules={[{ message: 'Please input!' }]}
            style={{ display: 'inline-block', width: 'calc(100% - 8px)' }}
          >
            <Input.TextArea />
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

