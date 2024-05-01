import React from 'react';
import '../Services/services.css';
import service1 from '../../assets/servicenew.jpeg';
import service2 from '../../assets/service2.jpg';
import service3 from '../../assets/servicenew3.jpg';



export default function Services() {
  return (
    <section className='portfolio'>
      <h2 className='heading'>Our<span style={{color: 'rgb(137, 190, 197, 1)'}}> Services</span></h2>
      <div className='portfoliocontainer'>
        <div className='portfoliocontainerportfoliobox'>
          <div className='portfoliohoverbox'>
            <img className='portfolioboximg' src={service1} alt="Project 1" />
            <div className='portfolioboxportfoliolayer'>
              <h4 className='portfoliolayerh4'>Specialized Care</h4>
              <p className='portfoliolayerp'>Experience tailored care in our dedicated units, including ICUs, cardiac wards, and specialized pediatric care, with expert teams providing compassionate and effective treatments.</p>
            </div>
          </div>
        </div>

        <div className='portfoliocontainerportfoliobox'>
          <div className='portfoliohoverbox'>
            <img className='portfolioboximg' src={service2} alt="Project 1" />
            <div className='portfolioboxportfoliolayer'>
              <h4 className='portfoliolayerh4'>Advanced Diagnostics</h4>
              <p className='portfoliolayerp'>Our cutting-edge diagnostic services deliver precise medical insights through advanced imaging and swift lab tests, ensuring accurate diagnoses for effective treatment plans</p>
            </div>
          </div>
        </div>

        <div className='portfoliocontainerportfoliobox'>
          <div className='portfoliohoverbox'>
            <img className='portfolioboximg' src={service3} alt="Project 1" />
            <div className='portfolioboxportfoliolayer'>
              <h4 className='portfoliolayerh4'>Surgical Services</h4>
              <p className='portfoliolayerp'>Access advanced surgical care across a spectrum of specialties at our hospital. Our integrated surgical departments, including general surgery, plastic surgery, and minimally invasive procedures.</p>
            </div>
          </div>
        </div>

        

      </div>
    </section>
  );
}
