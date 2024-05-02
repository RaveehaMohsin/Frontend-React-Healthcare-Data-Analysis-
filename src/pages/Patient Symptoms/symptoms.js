import React from 'react'
import Toplogoandbar from '../../components/ui/TopLogoandBar/toplogoandbar';
import Symptoms from '../../components/ui/Patient Symptoms Form/patientsymptoms'
import DoctorTable from '../../components/ui/Doctors shown Patient/dattable'
import DepartmentTable from '../../components/ui/Department Table for Patient/department'


export default function treatment() {
  return (
    <div>
        <div>
        <Toplogoandbar searchbar="Search Symptoms..."  titlepage="Symptoms" />
        </div>
        <div>
            <Symptoms />
        </div>
        <div>
        <h2 style={{ fontFamily: 'Poppins, sans-serif', color: 'black', fontWeight: '600', marginLeft: '10px'  }}>Choose your Department</h2>
        <div style={{marginTop : '20px'}}>
        <DepartmentTable />
        </div>
        </div>
        <div style={{marginTop : '20px'}}>
        <h2 style={{ fontFamily: 'Poppins, sans-serif', color: 'black', fontWeight: '600', marginLeft: '10px'  }}>Choose your Doctor</h2>
        <div style={{marginTop : '20px'}}>
        <DoctorTable />
        </div>

        </div>
      
    </div>
  )
}