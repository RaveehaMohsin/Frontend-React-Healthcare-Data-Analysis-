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
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-2">

            <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <FontAwesomeIcon icon={faStethoscope} className="h-4 w-4 text-muted-foreground mr-2" />
            <CardTitle className="text-sm font-medium">
                Total Treatments
            </CardTitle>
            </CardHeader>
            <CardContent>
            <div className="bg-gray-100 p-3 rounded-md flex justify-between items-center">
                <div>
                <ChartComponent backgroundColor="rgb(76, 187, 23)" borderColor="rgb(76, 187, 23)" />
                </div>
                <div className="text-md font-semibold text-gray-700">
                +30
                </div>
            </div>
            </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <FontAwesomeIcon icon={faUserDoctor} className="h-4 w-4 text-muted-foreground mr-2" />
            <CardTitle className="text-sm font-medium">
                Total Doctors
            </CardTitle>
            </CardHeader>
            <CardContent>
            <div className="bg-gray-100 p-3 rounded-md flex justify-between items-center">
                <div>
                <ChartComponent backgroundColor="rgb(255, 220, 0)" borderColor="rgb(255, 220, 0)" />
                </div>
                <div className="text-md font-semibold text-gray-700">
                +125
                </div>
            </div>
            </CardContent>
        </Card>
        
        </div>

        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-1 w-full">
        <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
            <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
                <CardTitle>Earnings</CardTitle>
                <CardDescription>
                Earning Report of this Department.
                </CardDescription>
            </div>
            </CardHeader>
            <CardContent>
            <SplineChart />
            </CardContent>
        </Card>
        </div>

        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-1 w-full">
        <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
            <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
                <CardTitle>Patients</CardTitle>
                <CardDescription>
                Patients Count from Department.
                </CardDescription>
            </div>
            </CardHeader>
            <CardContent>
            <AreaChart backgroundColor="rgb(255, 102, 102,0.6)" borderColor="rgb(255, 102, 102,1)" />
            </CardContent>
        </Card>
        </div>
            

    </main>
    </div>
  )
}
