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

            <Form.Group controlId="formName">
              <Form.Label style={{ fontSize: '12px' }}>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter medicine name"
                style={{ fontSize: '12px' }}
                required                
              />
              <Form.Control.Feedback type="invalid">
                Please enter medicine name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formDescription">
                <Form.Label style={{ fontSize: '12px' }}>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3} // Set the number of rows as per your design
                    placeholder="Enter description"
                    style={{ fontSize: '12px' }}
                />
                <Form.Control.Feedback type="invalid">
                    Please enter description.
                </Form.Control.Feedback>
                </Form.Group>


                <Form.Group controlId="formManufacturer">
              <Form.Label style={{ fontSize: '12px' }}>Manufacturer</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Manufacturer name."
                style={{ fontSize: '12px' }}
                required                
              />
              <Form.Control.Feedback type="invalid">
                Please enter medicine maufacturer.
              </Form.Control.Feedback>
            </Form.Group>


            <Form.Group controlId="formPrice">
              <Form.Label style={{ fontSize: '12px' }}>Price</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter Price"
                style={{ fontSize: '12px' }}
                required
                pattern="[0-9]+"
              />
              <Form.Control.Feedback type="invalid">
                Please enter numeric digits only for the Price.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formDosage">
              <Form.Label style={{ fontSize: '12px' }}>Dosage</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter dosage"
                style={{ fontSize: '12px' }}
              />
              <Form.Control.Feedback type="invalid">
                Please enter dosage.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formQuantity">
              <Form.Label style={{ fontSize: '12px' }}>Stock</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter Stock"
                style={{ fontSize: '12px' }}
                
                pattern="[0-9]+"
              />
              <Form.Control.Feedback type="invalid">
                Please enter numeric digits only for the Stock.
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
