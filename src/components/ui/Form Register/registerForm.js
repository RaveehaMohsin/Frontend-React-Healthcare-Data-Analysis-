import React from 'react';
import '../Form Register/registerform.css'
import {
  Button,
  DatePicker,
  Form,
  Input,
  Select,
} from 'antd';

const { RangePicker } = DatePicker;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 11 },
  },
};

export default function RegisterForm() {
  return (
    <>
      <Form className='bgcolor' {...formItemLayout} variant="outlined">
        <div className="form-group">
          <Form.Item
            label="First Name"
            name="firstname"
            rules={[
              { required: true, message: 'Please input!' },
              { pattern: /^[A-Za-z]+$/, message: 'Please enter only alphabetical characters!' },
            ]}
            
            style={{ display: 'inline-block', width: 'calc(50% - 10px)' }}
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
            style={{ display: 'inline-block', width: 'calc(50% - 8px)', marginLeft: '16px' }}
          >
            <Input />
          </Form.Item>
        </div>

        <div className="form-group">
          <Form.Item
            label="Gender"
            name="gender"
            rules={[{ message: 'Please select your gender!' }]}
            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
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
            style={{ display: 'inline-block', width: 'calc(50% - 8px)', marginLeft: '16px' }}
          >
            <Input.TextArea />
          </Form.Item>
        </div>

        <div className="form-group">
          <Form.Item
            label="CNIC"
            name="cnic"
            rules={[
              { required: true, message: 'Please input!' },
              { pattern: /^[0-9]+$/, message: 'Please enter only numerical characters!' },
            ]}
            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
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
            style={{ display: 'inline-block', width: 'calc(50% - 8px)', marginLeft: '16px' }}
          >
            <Input />
          </Form.Item>
        </div>

        <div className="form-group">
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please input!' },
              { type: 'email', message: 'Please enter a valid email address!' },
            ]}
            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Date of Birth"
            name="dob"
            rules={[{ required: true, message: 'Please input!' }]}
            style={{ display: 'inline-block', width: 'calc(50% - 8px)', marginLeft: '16px' }}
          >
            <DatePicker style={{ width: '100%' }}  />
          </Form.Item>
        </div>

        <div className="form-group">
          <Form.Item
            label="Zip Code"
            name="zipcode"
            rules={[{ message: 'Please input!' }, { pattern: /^[0-9]+$/, message: 'Please enter only numerical characters!' }]}
            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="State"
            name="state"
            rules={[{ message: 'Please input!' }, { pattern: /^[A-Za-z]+$/, message: 'Please enter only alphabetical characters!' }]}
            style={{ display: 'inline-block', width: 'calc(50% - 8px)', marginLeft: '16px' }}
          >
            <Input />
          </Form.Item>
        </div>

        
      </Form>
    </>
  );
}
