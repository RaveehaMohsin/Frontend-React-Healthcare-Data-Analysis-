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
            <Form.Group controlId="formAdminID">
              <Form.Label style={{ fontSize: '12px' }}>Admin ID</Form.Label>
              <Form.Control as="select" style={{ fontSize: '12px' }} required>
                <option value="">Select Admin ID</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                Please select an Admin ID.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formOfficeLocation">
              <Form.Label style={{ fontSize: '12px' }}>Office Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Office location"
                style={{ fontSize: '12px' }}                
              />
              <Form.Control.Feedback type="invalid">
                Please enter.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>

            <Form.Label style={{ fontSize: '12px' , paddingTop: '10px' , paddingRight: '20px' }}>Join Date</Form.Label>
        <input
          type="datetime-local"
          
          style={{ fontSize: '12px' }}
        />
        </Form.Group>

            <Form.Group controlId="formSalary">
              <Form.Label style={{ fontSize: '12px' }}>Salary</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter contact number"
                style={{ fontSize: '12px' }}
                required
                pattern="[0-9]+"
              />
              <Form.Control.Feedback type="invalid">
                Please enter numeric digits only for the Salary.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formNotes">
        <Form.Label style={{ fontSize: '12px' }}>Notes</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter Notes"
          style={{ fontSize: '12px' }}
        />
        <Form.Control.Feedback type="invalid">
          Please enter.
        </Form.Control.Feedback>
      </Form.Group>

            


            <Form.Group controlId="formName">
              <Form.Label style={{ fontSize: '12px' }}>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                style={{ fontSize: '12px' }}
                required
                pattern="[A-Za-z ]+"
                
              />
              <Form.Control.Feedback type="invalid">
                Please enter alphabets only for the Name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formLocation">
              <Form.Label style={{ fontSize: '12px' }}>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter location"
                style={{ fontSize: '12px' }}
                pattern="[A-Za-z ]+"
                
              />
              <Form.Control.Feedback type="invalid">
                Please enter alphabets only for the Location.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formWebsite">
              <Form.Label style={{ fontSize: '12px' }}>Website</Form.Label>
              <Form.Control
                type="url"
                placeholder="Enter website"
                style={{ fontSize: '12px' }}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label style={{ fontSize: '12px' }}>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                style={{ fontSize: '12px' }}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email address.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formContact">
              <Form.Label style={{ fontSize: '12px' }}>Contact</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter contact number"
                style={{ fontSize: '12px' }}
                required
                pattern="[0-9]+"
              />
              <Form.Control.Feedback type="invalid">
                Please enter numeric digits only for the Contact.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formZipcode">
              <Form.Label style={{ fontSize: '12px' }}>Zipcode</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter zipcode"
                style={{ fontSize: '12px' }}
                pattern="[0-9]+"
              />
            </Form.Group>

            <Form.Group controlId="formState">
              <Form.Label style={{ fontSize: '12px' }}>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter state"
                style={{ fontSize: '12px' }}
                pattern="[A-Za-z ]+"
              />
            </Form.Group>

            <Form.Group controlId="formCity">
              <Form.Label style={{ fontSize: '12px' }}>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                required
                style={{ fontSize: '12px' }}
                pattern="[A-Za-z ]+"
              />
              <Form.Control.Feedback type="invalid">
              Please enter alphabets only for the City.
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
