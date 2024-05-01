import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope,faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import ChartComponent from '../../../components/ui/chart/chart'; 
import SplineChart from '../../../components/ui/chart/splinechart';
import AreaChart from '../../../components/ui/chart/areachart'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card"



export default function analysisofdepartment() {
  return (
    <div style={{ backgroundColor: 'white', borderRadius: '10px'  , width: '800px'}}>
    <h1 className="text-lg font-semibold mb-2 " style={{paddingLeft: '30px' , paddingTop : '20px'}}>Medical Record</h1>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-1">
            <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <FontAwesomeIcon icon={faStethoscope} className="h-4 w-4 text-muted-foreground mr-2" />
            <CardTitle className="text-sm font-medium">
                4/29/2024
            </CardTitle>
            </CardHeader>
            <CardContent>
            <div className="bg-gray-100 p-3 rounded-md flex justify-between items-center">
            <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '12px' }}>
            <p><b>Complaint:</b> Bleeding Gums, Toothache, bad breath</p>
            <p><b>Diagnosis:</b> Gingivitis, Caries, Periodontitis</p>
            <p><b>Treatment:</b> Filling, Post&Core, Implant, Extraction</p>
            <p><b>Prescription:</b> Paracetamol, Amoxicillin, Ibuprofen, Aspirin...</p>
            </div>
      
            </div>
            </CardContent>
        </Card>        
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-1">
            <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <FontAwesomeIcon icon={faStethoscope} className="h-4 w-4 text-muted-foreground mr-2" />
            <CardTitle className="text-sm font-medium">
                4/30/2024
            </CardTitle>
            </CardHeader>
            <CardContent>
            <div className="bg-gray-100 p-3 rounded-md flex justify-between items-center">
            <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '12px' }}>
            <p><b>Complaint:</b> Bleeding Gums, Toothache, bad breath</p>
            <p><b>Diagnosis:</b> Gingivitis, Caries, Periodontitis</p>
            <p><b>Treatment:</b> Filling, Post&Core, Implant, Extraction</p>
            <p><b>Prescription:</b> Paracetamol, Amoxicillin, Ibuprofen, Aspirin...</p>
            </div>
      

            </div>
            </CardContent>
        </Card>        
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-1">
            <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <FontAwesomeIcon icon={faStethoscope} className="h-4 w-4 text-muted-foreground mr-2" />
            <CardTitle className="text-sm font-medium">
                4/28/2024
            </CardTitle>
            </CardHeader>
            <CardContent>
            <div className="bg-gray-100 p-3 rounded-md flex justify-between items-center">
            <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '12px' }}>
            <p><b>Complaint:</b> Bleeding Gums, Toothache, bad breath</p>
            <p><b>Diagnosis:</b> Gingivitis, Caries, Periodontitis</p>
            <p><b>Treatment:</b> Filling, Post&Core, Implant, Extraction</p>
            <p><b>Prescription:</b> Paracetamol, Amoxicillin, Ibuprofen, Aspirin...</p>
            </div>
      

            </div>
            </CardContent>
        </Card>        
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-1">
            <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <FontAwesomeIcon icon={faStethoscope} className="h-4 w-4 text-muted-foreground mr-2" />
            <CardTitle className="text-sm font-medium">
                4/26/2024
            </CardTitle>
            </CardHeader>
            <CardContent>
            <div className="bg-gray-100 p-3 rounded-md flex justify-between items-center">
            <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '12px' }}>
            <p><b>Complaint:</b> Bleeding Gums, Toothache, bad breath</p>
            <p><b>Diagnosis:</b> Gingivitis, Caries, Periodontitis</p>
            <p><b>Treatment:</b> Filling, Post&Core, Implant, Extraction</p>
            <p><b>Prescription:</b> Paracetamol, Amoxicillin, Ibuprofen, Aspirin...</p>
            </div>
    
            </div>
            </CardContent>
        </Card>        
        </div>            

    </main>
    </div>
  )
}
