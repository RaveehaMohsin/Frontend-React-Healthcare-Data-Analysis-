import React, { useState } from 'react';
import Toplogoandbar from '../../components/ui/TopLogoandBar/toplogoandbar';
import AlertWarn from '../../components/ui/Alerts/alerts';
import { Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoice, faUserInjured  , faUserDoctor, faStethoscope , faCommentMedical, faClipboard,faNotesMedical, faFileMedicalAlt, faHeartbeat, faCapsules, faReceipt, faMoneyCheck, faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import { FaNotesMedical } from 'react-icons/fa';

export default function Treatment() {
  const [treatmentDone, setTreatmentDone] = useState(true);
  const treatmentStatus = 'warning'; // This can be dynamic based on your logic

  return (
    <div className="container">
      <div>
        <Toplogoandbar searchbar="Search Treatment..." titlepage="Your Treatment" />
      </div>

      {treatmentDone ? (
        <div>
          <div style={{backgroundColor: 'white' , width : '1150px' , height : '700px ' , borderRadius: '20px' , marginTop: '20px'}}>  
          <h2 style={{ fontFamily: 'Poppins, sans-serif', color: 'black', fontWeight: '600', fontSize: '23px', marginLeft: '20px' , paddingTop: '40px'  }}>City Hospital</h2>  { /* Here respective hospital name will be written */ } 
          <div style={{marginTop : '20px'}}>
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-2">

            <Card x-chunk="dashboard-01-chunk-0" style={{marginLeft: '60px'}}>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <FontAwesomeIcon icon={faUserDoctor} className="h-4 w-4 text-muted-foreground mr-2" />
              <CardTitle className="text-sm font-medium">
                From
              </CardTitle>
            </CardHeader>
            <CardContent style={{ fontFamily: 'Poppins, serif' , fontSize : 'small' }}>
              <b>Dr.John Doe </b> <br/>
              johndoe@gmail.com <br/>
              0316 29824294 <br/>
            </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-0" style={{marginRight: '60px'}}>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <FontAwesomeIcon icon={faUserInjured} className="h-4 w-4 text-muted-foreground mr-2" />
              <CardTitle className="text-sm font-medium">
                To
              </CardTitle>
            </CardHeader>
            <CardContent style={{ fontFamily: 'Poppins, serif' , fontSize : 'small'}}>
            <b>Mark Lawrence</b> <br/>
              mark1516@gmail.com <br/>
              0333 88239214 <br/>
            </CardContent>
            </Card>               
          </div>
        </div> 

        <div>
        <div style={{marginLeft: '5px' , marginRight: '600px' , marginTop : '50px' , height: '80px'}}>
        <Card x-chunk="dashboard-01-chunk-0" style={{ marginLeft: '60px', height: '350px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <CardHeader className="flex flex-row items-center space-y-0 pb-2">
          <FontAwesomeIcon icon={faStethoscope} className="h-4 w-4 text-muted-foreground mr-2" />
          <CardTitle className="text-m font-medium">
            Treatment Plan
          </CardTitle>
        </CardHeader>
        <CardContent style={{ fontFamily: 'Poppins, serif', fontSize: 'small', padding: '20px' , marginTop : '9px'}}>
          <div className="mb-4">
            <FontAwesomeIcon icon={faHeartbeat} className="text-primary mr-2" />
            <b>Symptom Name:</b> Fever
          </div>
          <div className="mb-4">
            <FontAwesomeIcon icon={faNotesMedical} className="text-primary mr-2" />
            <b>Diagnosis:</b> Viral Infection
          </div>
          <div className="mb-4">
            <FontAwesomeIcon icon={faFileMedicalAlt} className="text-primary mr-2" />
            <b>Treatment Plan:</b> Rest and hydration
          </div>
          <div className="mb-4">
            <FontAwesomeIcon icon={faClipboard} className="text-primary mr-2" />
            <b>Case Type:</b> Acute
          </div>
          <div className="mb-4">
            <FontAwesomeIcon icon={faCommentMedical} className="text-primary mr-2" />
            <b>Advice:</b> Follow-up in 3 days if symptoms persist
          </div>
          <div>
          <FontAwesomeIcon icon={faCapsules} className="text-primary mr-2" />
          <b>Medicines:</b> Ibuprofen
        </div>
        </CardContent>
      </Card>
     </div>
     <div style={{ marginLeft: '650px', marginRight: '200px' , marginTop: '-55px' , height: '300px', backgroundColor: '#f0f0f0', padding: '20px', paddingTop: '30px' , borderRadius: '8px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
  <h3 className="text-lg font-semibold mb-4">Payment Details</h3>
  <div className="mb-3">
    <FontAwesomeIcon icon={faReceipt} className="text-primary mr-2" />
    <span>Medicine Bill:</span>
    <span className="ml-auto">Rs.700</span>
  </div>
  <div className="mb-3">
    <FontAwesomeIcon icon={faStethoscope} className="text-primary mr-2" />
    <span>Doctor Consultation Fee:</span>
    <span className="ml-auto">Rs.1500</span>
  </div>
  <div className="mb-3">
    <FontAwesomeIcon icon={faCalendarAlt} className="text-primary mr-2" />
    <span>Date Issued:</span>
    <span className="ml-auto">May 2, 2024</span>
  </div>
  <div className="mb-3">
    <FontAwesomeIcon icon={faMoneyCheck} className="text-primary mr-2" />
    <span>Payment Status:</span>
    <span className="ml-auto">Paid</span>
  </div>
  <hr className="my-2" />
  <div className="font-bold text-xl">
    <span>Total Bill:</span>
    <span className="ml-auto">Rs.2200</span>
  </div>
</div>



    <div style={{marginLeft : '720px' , marginTop: '20px'}}>
    <Button style={{ backgroundColor: 'rgb(137, 190, 197, 0.6)', height: '50px', borderRadius: '10px' }}>
                <FontAwesomeIcon icon={faFileInvoice} style={{ marginRight: '5px' }} />
                Generate Invoice
              </Button>
      </div>
     </div>         
        </div>
        </div>
      ) : (
        <div>
          <AlertWarn variant={treatmentStatus} />
        </div>
      )}
    </div>
  );
}
