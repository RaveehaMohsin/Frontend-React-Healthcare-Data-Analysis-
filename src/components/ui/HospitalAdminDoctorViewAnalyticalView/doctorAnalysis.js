import React from 'react'
import DottedChart from '../../../components/ui/chart/dottedchart'
import SplineChart from '../../../components/ui/chart/splinechart';
import AreaChart from '../../../components/ui/chart/areachart'
import Piechart from '../../../components/ui/chart/piechart'
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
        
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-1 w-full">
        <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
            <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
                <CardTitle>Patients</CardTitle>
                <CardDescription>
                Patients Treated by Doctor over Months.
                </CardDescription>
            </div>
            </CardHeader>
            <CardContent>
            <AreaChart backgroundColor="rgb(255, 102, 102,0.6)" borderColor="rgb(255, 102, 102,1)" />
            </CardContent>
        </Card>
        </div>

        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-1 w-full">
        <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
            <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
                <CardTitle>Earnings</CardTitle>
                <CardDescription>
                Earning Report of Doctor.
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
                <CardTitle>Active Peak Hour</CardTitle>
                <CardDescription>
                At what times doctor is mostly active in a day.
                </CardDescription>
            </div>
            </CardHeader>
            <CardContent>
           <DottedChart  backgroundColor="rgb(255, 220, 0)" borderColor="rgb(255, 220, 0)"/>
            </CardContent>
        </Card>
        </div>


        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-1 w-full">
        <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
            <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
                <CardTitle>Contribution</CardTitle>
                <CardDescription>
                Doctor contribution to Hospital.
                </CardDescription>
            </div>
            </CardHeader>
            <CardContent>
            <Piechart backgroundColor="rgb(76, 187, 23 , 0.6)" borderColor="rgb(76, 187, 23,1)"/>
            </CardContent>
        </Card>
        </div>
            

    </main>
    </div>
  )
}
