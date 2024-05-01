import React from 'react';
import { Row, Col, Card } from 'antd';
import picture from '../../assets/male.png';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '50px' ,marginTop: '-20px' }}>
      <style>
        {`
          .div1
           {
            font-family: 'Poppins', sans-serif;
            font-size: 50px; /* Increase font size */
            font-weight: 800; /* Increase font weight */           
          }
          .otherclass
           {
            font-family: 'Poppins', sans-serif;
            font-size: 45px; /* Increase font size */
            font-weight: 300; /* Increase font weight */           
          }
          .otherclass2
           {
            font-family: 'Poppins', sans-serif;
            font-size: 18px; /* Increase font size */
            font-weight: 50; /* Increase font weight */           
          }

          @keyframes slideInTop {
            0% {
              opacity: 0;
              transform: translateY(-100%);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeInDown {
            0% {
              opacity: 0;
              transform: translateY(-10%);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(10%);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
         
          
      
        `}
      </style>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <div className={'div1'} style={{paddingTop: '0px'}} >
            <h1 style={{animation: 'slideInTop 1s'}} className={'otherclass'}>Our</h1>
            <h1 style={{animation: 'slideInTop 2s' , color: 'rgb(137, 190, 197, 1)'}} >Healthcare</h1>
            <h1 style={{animation: 'slideInTop 2s'}}  className={'otherclass'}>Team</h1>
            <p style={{animation: 'slideInTop 2s', color: '#f0f0f0'}} className={'otherclass2'} >hi</p>
            <p style={{animation: 'slideInTop 2s'}} className={'otherclass2'}>​Our system relies on several key roles to function effectively.The </p>
            <p style={{animation: 'slideInTop 2s'}} className={'otherclass2'}>Main Admin oversees administrative tasks, ensuring smooth</p>
            <p style={{animation: 'slideInTop 2s'}} className={'otherclass2'}>operations. Hospital Admins manage hospital-specific operations</p>
            <p style={{animation: 'slideInTop 2s'}} className={'otherclass2'}>like staff and resources. Doctors provide medical care, diagnoses, &</p>
            <p style={{animation: 'slideInTop 2s'}} className={'otherclass2'}>treatments. Patients receive personalized healthcare services.</p>
            <p style={{animation: 'slideInTop 2s'}} className={'otherclass2'}>Together,they ensure efficient healthcare delivery within system.</p>
            <div>
              <Link to="/dashboard">
          <Button style={{ color: 'white', backgroundColor: 'rgb(137, 190, 197)', border: '2px solid rgba(137, 190, 197, 1)' , animation: 'slideInTop 2s' }}>
            Learn More
          </Button>
          </Link>
        </div>
        

          </div>
        </Col>
      </Row>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '-430px' }}>
  <Row gutter={[16, 16]}>
    <Col span={5.5}>
      <h6 className="text-center" style={{ color: '#f0f0f0' }}>About</h6>
      <h6 className="text-center" style={{ color: '#f0f0f0' }}>About</h6>
      <Card 
      style={{ 
        width: 250, 
        height: 250, 
        marginBottom: 10, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        border: '4px solid rgb(137, 190, 197)', 
        borderRadius: 10,
        boxShadow: '8px 8px rgba(137, 190, 197, 0.5)', 
        animation: 'fadeInDown 3s infinite alternate', 
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: 10 }}>
        <img
          src={picture}
          alt="Icon"
          style={{ width: 100, height: 120, borderRadius: '50%' }}
        />
      </div>
      <h2 style={{ textAlign: 'center', marginBottom: 5, fontSize: 16 }}>Hospital Admin</h2>
      <p style={{ textAlign: 'center', fontSize: 12 }}>Manager</p>
    </Card>
    <Card 
      style={{ 
        width: 250, 
        height: 250, 
        marginBottom: 10, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        border: '4px solid rgb(76, 187, 23)', 
        borderRadius: 10,
        boxShadow: '8px 8px rgb(76, 187, 23 , 0.5)', // Adjusted box shadow
        animation: 'fadeInUp 3s infinite alternate', // Added animation
      }}
    >
        <div style={{ textAlign: 'center', marginBottom: 10 }}>
          <img
            src={picture}
            alt="Icon"
            style={{ width: 100, height: 120, borderRadius: '50%' }}
          />
        </div>
        <h2 style={{ textAlign: 'center', marginBottom: 5, fontSize: 16 }}>Doctor</h2>
        <p style={{ textAlign: 'center', fontSize: 12 }}>Medical Provider</p>
      </Card>
    </Col>
    <Col span={12}>
    <Card 
      style={{ 
        width: 250, 
        height: 250, 
        marginBottom: 10, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        border: '4px solid rgb(255, 220, 0)', 
        borderRadius: 10,
        boxShadow: ' 8px 8px rgb(255, 220, 0 , 0.5)', // Adjusted box shadow
        animation: 'fadeInDown 3s infinite alternate', // Added animation
      }}
    >
        <div style={{ textAlign: 'center', marginBottom: 10 }}>
          <img
            src={picture}
            alt="Icon"
            style={{ width: 100, height: 120, borderRadius: '50%' }}
          />
        </div>
        <h2 style={{ textAlign: 'center', marginBottom: 5, fontSize: 16 }}>Main Admin</h2>
        <p style={{ textAlign: 'center', fontSize: 12 }}>System Overseer</p>
      </Card>
      <Card 
      style={{ 
        width: 250, 
        height: 250, 
        marginBottom: 10, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        border: '4px solid rgb(255, 102, 102)', 
        borderRadius: 10,
        boxShadow: ' 8px 8px rgb(255, 102, 102, 0.5)', 
        animation: 'fadeInUp 3s infinite alternate', 
      }}
    >
        <div style={{ textAlign: 'center', marginBottom: 10 }}>
          <img
            src={picture}
            alt="Icon"
            style={{ width: 100, height: 120, borderRadius: '50%' }}
          />
        </div>
        <h2 style={{ textAlign: 'center', marginBottom: 5, fontSize: 16 }}>Patient</h2>
        <p style={{ textAlign: 'center', fontSize: 12 }}>Healthcare Recipient</p>
          </Card>
        </Col>
      </Row>
    </div>

    </div>
  );
}
