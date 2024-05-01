import React, { useState } from 'react';
import '../Form Register/registerform.css'
import { Form, Input, Select, Radio, DatePicker, Row, Col } from 'antd';

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }, // Increase the span for the wrapper column to fit two items inline
  },
};

const PatientSymptoms = () => {
  const [addNewSymptoms, setAddNewSymptoms] = useState('yes');

  const handleAddSymptomsChange = (e) => {
    setAddNewSymptoms(e.target.value);
  };

  return (
    <Form {...formItemLayout} className='bgcolor' >    
      <Form.Item label="Want to add new symptoms?" name="addSymptoms" style={{ textAlign: 'center' }}>
    <Radio.Group onChange={handleAddSymptomsChange} value={addNewSymptoms} style={{ display: 'inline-block' }}>
      <Radio value="yes">Yes</Radio>
      <Radio value="no">No</Radio>
    </Radio.Group>
  </Form.Item>

      {addNewSymptoms === 'yes' && (
        <>
        <div style={{ textAlign: 'center' }}>
          <Form.Item
            label="Enter Symptom Name"
            name="symptomname"
            style={{ display: 'inline-block', width: 'calc(50% - 8px)', marginBottom: 16 }}
            rules={[{ required: true, message: 'Please enter the symptom name!' }]}
          >
            <Input placeholder="Enter new symptoms name" />
          </Form.Item>
        </div>

        <Row gutter={16} justify="space-between">
          <Col span={11}>
            <Form.Item label="Date Recorded" name="daterecorded" style={{ marginBottom: 16 }} rules={[{ required: true, message: 'Please select the date!' }]}>
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Description"
              name="description"
              style={{ marginBottom: 16, marginLeft: '10px' }}
              rules={[{ required: true, message: 'Please enter the description!' }]} 
            >
              <Input.TextArea placeholder="Enter description" />
            </Form.Item>
          </Col>
        </Row>


        </>
      )}

      {addNewSymptoms === 'no' && (
        <>
          <div style={{ textAlign: 'center' }}>
      <Form.Item
        label="Select Existing Symptoms"
        name="existingSymptoms"
        style={{ display: 'inline-block', width: 'calc(50% - 8px)', marginBottom: 16 }}
        labelCol={{ span: 9 }} 
        wrapperCol={{ span: 20 }} 
        rules={[{ required: true, message: 'Please select existing symptoms!' }]}
      >
        <Select placeholder="Select symptoms name" style={{ width: '100%' }}>
          <Option value="symptom1">Symptom 1</Option>
          <Option value="symptom2">Symptom 2</Option>
          <Option value="symptom3">Symptom 3</Option>
        </Select>
      </Form.Item>
    </div>
       <Row gutter={16} justify="space-between">
          <Col span={11}>
            <Form.Item label="Date Recorded" name="daterecorded" style={{ marginBottom: 16 }} rules={[{ required: true, message: 'Please select the date!' }]}>
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Description"
              name="description"
              style={{ marginBottom: 16, marginLeft: '10px' }} 
              rules={[{ required: true, message: 'Please enter the description!' }]} 
            >
              <Input.TextArea placeholder="Enter description" />
            </Form.Item>
          </Col>
        </Row>
        </>
      )}
    </Form>
  );
};

export default PatientSymptoms;
