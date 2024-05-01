import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { FaSave, FaTimes } from 'react-icons/fa'; // Import icons

export default function AddHospitalModal({ Title , show, onHide }) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div>
      <Modal show={show} centered onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px' }}>{Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px' }}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            
            <Form.Group controlId="formDepartmentID">
              <Form.Label style={{ fontSize: '12px' }}>Department ID</Form.Label>
              <Form.Control as="select" style={{ fontSize: '12px' }} required>
                <option value="">Select Department ID</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                Please select an Department ID.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formAssignDate">
                <Form.Label style={{ fontSize: '12px' }}>Assignment Date</Form.Label>
                <Form.Control
                    type="datetime-local"
                    placeholder="Enter Date"
                    style={{ fontSize: '12px' }}
                />
                <Form.Control.Feedback type="invalid">
                    Please enter Date.
                </Form.Control.Feedback>
                </Form.Group>
            
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="" type="submit" style={{ width: '48%', backgroundColor: 'rgb(137, 190, 197, 1)' }}>
                <FaSave className="mr-2" /> Save Changes
              </Button>
              <Button variant="secondary" onClick={onHide} style={{ width: '48%' }}>
                <FaTimes className="mr-2" /> Cancel
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
