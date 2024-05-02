import React, { useState } from 'react';
import { Form, Input, Select, Radio, DatePicker, Row, Col } from 'antd';

const { Option } = Select;
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const PatientSymptoms = () => {
  const [addNewSymptoms, setAddNewSymptoms] = useState('yes');

  const handleAddSymptomsChange = (e) => {
    setAddNewSymptoms(e.target.value);
  };

  return (
    <div style={{ margin: '20px auto', padding: '20px', maxWidth: '1000px', background: 'white', borderRadius: '10px', fontFamily: 'Poppins, sans-serif' }}>
      <style>
        {`
          body {
            font-family: 'Poppins', sans-serif;
          }

          .form-container {
            margin-top: 20px;
          }

          .form-header {
            font-size: 20px;
            margin-bottom: 20px;
            text-align: center;
          }

          .form-item {
            margin-bottom: 16px;
          }

          .centered {
            text-align: center;
          }

          .bold-label {
            font-weight: bold;
          }
        `}
      </style>

      <div className="form-container">
        <div className="form-header">Patient Symptoms Form</div>
        <Form {...formItemLayout}>
          <Form.Item label="Want to add new symptoms?" name="addSymptoms" className="form-item bold-label">
            <Radio.Group onChange={handleAddSymptomsChange} value={addNewSymptoms}>
              <Radio value="yes">Yes</Radio>
              <Radio value="no">No</Radio>
            </Radio.Group>
          </Form.Item>

          {addNewSymptoms === 'yes' && (
            <div className="centered">
              <Form.Item label="Enter Symptom Name" name="symptomname" className="form-item">
                <Input placeholder="Enter new symptom name" />
              </Form.Item>
              <Form.Item label="Date Recorded" name="daterecorded" className="form-item">
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item label="Description" name="description" className="form-item">
                <Input.TextArea rows={4} placeholder="Enter description" />
              </Form.Item>
            </div>
          )}

          {addNewSymptoms === 'no' && (
            <div className="centered">
              <Form.Item label="Select Existing Symptoms" name="existingSymptoms" className="form-item">
                <Select placeholder="Select symptoms name">
                  <Option value="symptom1">Symptom 1</Option>
                  <Option value="symptom2">Symptom 2</Option>
                  <Option value="symptom3">Symptom 3</Option>
                </Select>
              </Form.Item>
              <Form.Item label="Date Recorded" name="daterecorded" className="form-item">
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item label="Description" name="description" className="form-item">
                <Input.TextArea rows={4} placeholder="Enter description" />
              </Form.Item>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
};

export default PatientSymptoms;
