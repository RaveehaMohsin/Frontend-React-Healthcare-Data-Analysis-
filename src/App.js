import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About/about';
import Home from './pages/Home/home';
import Services from './pages/Services/services';

import Navbar from './components/ui/Navbar/navbar';
import Dashboard from './components/ui/Dashboard/dashboard';
import MyDashboard from './components/ui/Dashboard/mydashboard';
import HospitalAdminDashboard from './components/ui/Dashboard/mydashboard_hospitaladmin'
import './App.css'; 
import PatientRegister from './pages/Patient Register/patientregister';
import PatientTreatment from './pages/Treatment/treatment';
import MyDashboard_mainAdmin from './components/ui/Dashboard/mydashboard_mainAdmin';
import MainAdminRegister from './pages/Main Admin Register/mainadminregister'
import MainAdminHospitalManagement from './pages/Hospital CRUD Main Admin/hospialcrudmainadmin'
import MainAdminView from './pages/Main Admin Register/mainadminview'
import MainAdminHospitalView from './pages/Hospital CRUD Main Admin/hospitalviewpage'
import HospitalAdminRegister from './pages/Hospital Admin Register/HospitalAdminRegisterPage'
import HospitalAdminViewPage from './pages/Hospital Admin Register/HospitalAdminViewPage'
import HospitalAdminDepartments from './pages/Hospital Admin Departments CRUD/hospitaladmindepartmentsAdd'
import HospitalAdminDepartmentView from './pages/Hospital Admin Departments CRUD/hospitaladmindepartmentview'
import HospitalAdminMedicine from './pages/MedicineCrud/medicines'
import HospitalAdminTreatments from './pages/Hospital Admin Predefined Treaments/treatmentscrud'
import HospitalAdminDoctorsView from './pages/Hospital Admin doctor page/doctorsofahospital'
import HospitalAdminDepartmentAssignment from './pages/Hospital Admin Unassigned Staff Assignment/assignmentofdepartments'
import HospitalAdminUserView from './pages/Hospital Admin Unassigned Staff Assignment/particulardoctorview'
import HospitalDoctorsView from './pages/Hospital Admin doctor page/doctorsview'
import HospitalAdminpatientview from './pages/HospitalAdminPatientsView/patientsviewhospitaladmin'
import HospitalAdminParticularPatient from './pages/HospitalAdminPatientsView/particularpatientview'

function App() {
  return (
    <div  className="app-container">
      <Router>
        <Navbar title="HealthCare Centre" />
        <div className="content-container">
          <div className="dashboard-container">   
          {/*<MyDashboard />  */}              {/* This is the dashboard for Patient*/}
          {/* { <MyDashboard_mainAdmin />  }      This is the dashboard for MainAdmin */}
           <HospitalAdminDashboard />          {/*   This is the dashboard for HospitalAdmin */}
          </div>
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />           
              <Route path="/patientRegister" element={<PatientRegister />} />     
              <Route path="/patientTreatment" element={<PatientTreatment />} />
              <Route path="/mainadminregister" element={<MainAdminRegister />} />      
              <Route path="/mainadminview" element={<MainAdminView />} /> 
              <Route path="/mainadminhospitalmanagement" element={<MainAdminHospitalManagement  />} />   
              <Route path="/mainadminhospitalview" element={<MainAdminHospitalView  />} />
              <Route path="/dashboard" element={<Home  />} />
              <Route path="/hospitaladminregister" element={<HospitalAdminRegister />} /> 
              <Route path="/hospitaladminviewpage" element={<HospitalAdminViewPage />} />
              <Route path="/hospitaladmindepartments" element={<HospitalAdminDepartments />} />
              <Route path="/hospitaladmindepartmentview" element={<HospitalAdminDepartmentView />} />
              <Route path="/hospitaladminmedicine" element={<HospitalAdminMedicine />} />
              <Route path="/hospitaladminpredefinedtreatments" element={<HospitalAdminTreatments />} />
              <Route path="/hospitaladminunassignedstaff" element={<HospitalAdminDepartmentAssignment />} />
              <Route path="/hospitaladmindoctors" element={<HospitalAdminDoctorsView />} />
              <Route path="/hospitaladminunassigneduserviews" element={<HospitalAdminUserView />} />
              <Route path="/hospitaladminassigneddoctor" element={<HospitalDoctorsView />} />
              <Route path="/hospitaladminpatientview" element={<HospitalAdminpatientview />} />
              <Route path="/hospitaladminparticularpatientview" element={<HospitalAdminParticularPatient />} />
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;