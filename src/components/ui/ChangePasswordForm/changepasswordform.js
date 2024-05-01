import React from 'react';
import { Form, Input, Button } from 'antd';

const ChangePasswordForm = () => {
  return (
    <div style={{ backgroundColor: 'white', padding: '20px', fontFamily: 'Poppins, sans-serif', width: '800px', borderRadius: '10px' }}>
      <div className="p-4">
        <h3 className="text-md font-semibold mb-2">Change Password</h3>
        <Form name="changePasswordForm" onFinish={(values) => console.log(values)}>
          <Form.Item
            name="currentPassword"
            label={<span style={{ fontWeight: 'normal', fontSize: 'small' , fontFamily: 'Poppins, sans-serif' }}>Current Password</span>}
            labelCol={{ span: 24 }}
            rules={[{ required: true, message: 'Please enter your current password!' }]}
            labelAlign="left" 
            
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="newPassword"
            label={<span style={{ fontWeight: 'normal', fontSize: 'small' , fontFamily: 'Poppins, sans-serif' }}>New Password</span>}
            labelCol={{ span: 24 }}
            rules={[{ required: true, message: 'Please enter your new password!' }]}
            labelAlign="left"
            labelStyle={{ fontWeight: 'normal', fontSize: 'small' }}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            label={<span style={{ fontWeight: 'normal', fontSize: 'small' , fontFamily: 'Poppins, sans-serif' }}>Confirm Password</span>}
            labelCol={{ span: 24 }}
            dependencies={['newPassword']}
            rules={[
              { required: true, message: 'Please confirm your new password!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('newPassword') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords do not match!'));
                },
              }),
            ]}
            labelAlign="left"
            labelStyle={{ fontWeight: 'normal', fontSize: 'small' }}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ backgroundColor: 'rgb(137, 190, 197, 1)' }}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
