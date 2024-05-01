import React from 'react';
import { Button, Form, Input, Cascader, Space, TreeSelect, Select } from 'antd';
import '../Form Register/registerform.css';

const { Option } = Select;

const generateTreeData = () => {
  const treeData = [];

  for (let i = 1; i <= 7; i++) {
    const children = [];
    for (let j = 1; j <= 9; j++) {
      children.push({ value: `${i}.${j}`, title: `${i}.${j}` });
    }
    treeData.push({ value: i.toString(), title: i.toString(), children });
  }

  return treeData;
};

const SubmitButton = ({ form, children }) => {
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
  const values = Form.useWatch([], form);
  React.useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  );
};

const PatientRecord = () => {
  const [form] = Form.useForm(); // Create a form instance

  return (
    <>
      <Form className='bgcolor' form={form} name="validateOnly" layout="vertical" autoComplete="off">
      <h1 className="text-lg font-semibold mb-2">Health Details</h1>
        <Form.Item label="Weight" name="weight" rules={[
          {
            required: true,
            message: 'Please enter your weight',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || /^(\d+|\d+\.\d+)$/.test(value)) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Please enter a valid numerical value or decimal value'));
            },
          }),
        ]}>
          <Input placeholder="Enter your Weight in kgs" />
        </Form.Item>

        <Form.Item
        label="Blood Pressure"
        name="bloodpressure"
        
      >
        <Cascader
          options={[
            { value: '90/60', label: '90/60' },
            { value: '100/70', label: '100/70' },
            { value: '110/75', label: '110/75' },
            { value: '120/80', label: '120/80' },
            { value: '130/85', label: '130/85' },
            { value: '140/90', label: '140/90' },
            { value: '150/95', label: '150/95' },
            { value: '160/100', label: '160/100' },
            { value: '170/105', label: '170/105' },
            { value: '180/110', label: '180/110' },
            { value: '190/115', label: '190/115' },
            { value: '200/120', label: '200/120' },
          ]}
          placeholder="Select Blood Pressure"
        />
      </Form.Item>

      <Form.Item
        label="Height"
        name="height"
        rules={[{ message: 'Please enter your Height' }]}
      >
        <TreeSelect
          style={{ width: '100%' }}
          dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          treeData={generateTreeData()}
          placeholder="Select Height in ft"
        />
      </Form.Item>

            <Form.Item
        label="Any Allergy"
        name="allergy"
        rules={[{ message: 'Please input!' }]}
        >
        <Input.TextArea placeholder="Write any allergies if you have." />
        </Form.Item>


        <Form.Item label="Alive Status" name="alivestatus" rules={[{ required: true, message: 'Please select alive status' }]}>
        <Select placeholder="Select alive status">
            <Option value="Alive">Alive</Option>
            <Option value="Dead">Dead</Option>
        </Select>
        </Form.Item>

        <Form.Item label="Blood Type" name="bloodtype" rules={[{ message: 'Please select blood type' }]}>
        <Select placeholder="Select blood type">
            <Option value="A+">A+</Option>
            <Option value="A-">A-</Option>
            <Option value="B+">B+</Option>
            <Option value="B-">B-</Option>
            <Option value="AB+">AB+</Option>
            <Option value="AB-">AB-</Option>
            <Option value="O+">O+</Option>
            <Option value="O-">O-</Option>
        </Select>
        </Form.Item>

        <Form.Item
        label="Medical History"
        name="medicalhistory"
        rules={[{ required: true , message: 'Please input!' }]}
        >
        <Input.TextArea placeholder="If not write null." />
        </Form.Item>

      

      <Form.Item>
        <Space>
          <Button htmlType="reset">Reset</Button>
        </Space>
      </Form.Item>
      </Form>

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
    </>
  );
};

export default PatientRecord;
