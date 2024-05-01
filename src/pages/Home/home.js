import React from 'react'
import { Link } from 'react-router-dom';
import picture from '../../assets/male.png'
import hospitalpic from '../../assets/hospital.png'
import hospitalpic2 from '../../assets/Health Life Medical Center Logo (1).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospital ,faUserDoctor , faStethoscope , faHouseMedical} from '@fortawesome/free-solid-svg-icons';
import ChartComponent from '../../components/ui/chart/chart'; // Import your ChartComponent
import SplineChart from '../../components/ui/chart/splinechart';
import {
  ArrowUpRight,
} from "lucide-react"

import { Button } from "../../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"
import { Input } from "../../components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table"

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
    <div className="flex items-center gap-4">
      <Input
        type="search"
        placeholder="Search Hospitals..."
        className="pl-8 border-none focus:outline-none w-48 md:w-64"
      />
      <div className="ml-auto">
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <div className="flex items-center space-x-2">
        <img
          src={picture}
          alt="Profile"
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            marginRight: '10px',
          }}
        />
            <span className="sr-only">Toggle user menu</span>
            <span className="hidden md:inline-block">Admin</span>
        </div>
      </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">

        <Card x-chunk="dashboard-01-chunk-0">
        <CardHeader className="flex flex-row items-center space-y-0 pb-2">
          <FontAwesomeIcon icon={faHospital} className="h-4 w-4 text-muted-foreground mr-2" />
          <CardTitle className="text-sm font-medium">
            Total Hospitals
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-100 p-3 rounded-md flex justify-between items-center">
            <div>
              <ChartComponent />
            </div>
            <div className="text-md font-semibold text-gray-700">
              +1600
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
              +1250
            </div>
          </div>
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-0">
        <CardHeader className="flex flex-row items-center space-y-0 pb-2">
          <FontAwesomeIcon icon={faStethoscope} className="h-4 w-4 text-muted-foreground mr-2" />
          <CardTitle className="text-sm font-medium">
            Total Appointment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-100 p-3 rounded-md flex justify-between items-center">
            <div>
            <ChartComponent backgroundColor="rgb(76, 187, 23)" borderColor="rgb(76, 187, 23)" />
            </div>
            <div className="text-md font-semibold text-gray-700">
              +130
            </div>
          </div>
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-0">
        <CardHeader className="flex flex-row items-center space-y-0 pb-2">
          <FontAwesomeIcon icon={faHouseMedical} className="h-4 w-4 text-muted-foreground mr-2" />
          <CardTitle className="text-sm font-medium">
            Total Departments
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-100 p-3 rounded-md flex justify-between items-center">
            <div>
            <ChartComponent backgroundColor="rgb(255, 102, 102)" borderColor="rgb(255, 102, 102)" />
            </div>
            <div className="text-md font-semibold text-gray-700">
              +600
            </div>
          </div>
        </CardContent>
      </Card>
    </div>


    <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
    <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
   <CardHeader className="flex flex-row items-center">
    <div className="grid gap-2">
      <CardTitle>Patients</CardTitle>
      <CardDescription>
        Patients Count from our system.
      </CardDescription>
    </div>
  </CardHeader>
  <CardContent>
   <SplineChart />
  </CardContent>
</Card>


      <Card x-chunk="dashboard-01-chunk-5">
  <CardHeader>
    <CardTitle>Popular Hospitals</CardTitle>
  </CardHeader>
  <CardContent className="grid gap-8">
    {/* First row */}
    <div className="grid grid-cols-2 gap-4 items-center">
      <div className="flex items-center">
        <img
          src={hospitalpic}
          alt="Hospital"
          className="w-12 h-12 rounded-full flex-shrink-0 mr-4"
        />
        <div>
          <h3 className="text-xs font-semibold">Punjab Institute of Cardiology</h3>
          <p className="text-xs text-gray-500">www.punjabinstituteofcardiology.com</p>
        </div>
      </div>
    </div>
    {/* Second row */}
    <div className="grid grid-cols-2 gap-4 items-center">
      <div className="flex items-center">
        <img
          src={hospitalpic2}
          alt="Hospital"
          className="w-12 h-12 rounded-full flex-shrink-0 mr-4"
        />
        <div>
          <h3 className="text-xs font-semibold">Jinnah Hospital </h3>
          <p className="text-xs text-gray-500">www.jinnahhospital.com</p>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4 items-center">
      <div className="flex items-center">
        <img
          src={hospitalpic}
          alt="Hospital"
          className="w-12 h-12 rounded-full flex-shrink-0 mr-4"
        />
        <div>
          <h3 className="text-xs font-semibold">Saira Memorial Hospital</h3>
          <p className="text-xs text-gray-500">www.sairamemorialhospital.com</p>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4 items-center">
      <div className="flex items-center">
        <img
          src={hospitalpic2}
          alt="Hospital"
          className="w-12 h-12 rounded-full flex-shrink-0 mr-4"
        />
        <div>
          <h3 className="text-xs font-semibold">City Hospital</h3>
          <p className="text-xs text-gray-500">www.cityhospital.com</p>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4 items-center">
      <div className="flex items-center">
        <img
          src={hospitalpic}
          alt="Hospital"
          className="w-12 h-12 rounded-full flex-shrink-0 mr-4"
        />
        <div>
          <h3 className="text-xs font-semibold">Healthcare Hospital</h3>
          <p className="text-xs text-gray-500">www.healthcarehospital.com</p>
        </div>
      </div>
    </div>
    {/* Additional content */}
  </CardContent>
</Card>

   </div>
        
    <div className="grid gap-1 md:gap-10 lg:grid-cols-2 xl:grid-cols-3">

    <Card className="xl:col-span-3" x-chunk="dashboard-01-chunk-4">
  <CardHeader className="flex flex-row items-center">
    <div className="grid gap-2">
      <CardTitle>Doctors</CardTitle>
      <CardDescription>
        Popular Doctors from our system.
      </CardDescription>
    </div>
    <Button asChild size="sm" className="ml-auto gap-1">
      <Link href="#">
        View All
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </Button>
  </CardHeader>

  <CardContent>
    <Table>
      <TableHeader style={{ backgroundColor: '#f3f4f6' }}>
        <TableRow>
          <TableHead>#</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Contact</TableHead>
          <TableHead>Hospital</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="py-2">1</TableCell>
          <TableCell className="py-2">
            <div className="font-medium text-sm">Dr. John Doe</div>
          </TableCell>
          <TableCell className="py-4 text-xs">john.doe@example.com</TableCell>
          <TableCell className="py-4 text-xs">+1-234-567-8901</TableCell>
          <TableCell className="py-4 text-xs">Punjab Institute of Cardiology</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="py-2">2</TableCell>
          <TableCell className="py-2">
            <div className="font-medium text-sm">Dr. Jane Smith</div>
          </TableCell>
          <TableCell className="py-4 text-xs">jane.smith@example.com</TableCell>
          <TableCell className="py-4 text-xs">+1-345-678-9012</TableCell>
          <TableCell className="py-4 text-xs">City Hospital</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="py-2">3</TableCell>
          <TableCell className="py-2">
            <div className="font-medium text-sm">Dr. Alex Johnson</div>
          </TableCell>
          <TableCell className="py-4 text-xs">alex.johnson@example.com</TableCell>
          <TableCell className="py-4 text-xs">+1-456-789-0123</TableCell>
          <TableCell className="py-4 text-xs">XYZ Medical Center</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="py-2">4</TableCell>
          <TableCell className="py-2">
            <div className="font-medium text-sm">Dr. Sarah Williams</div>
          </TableCell>
          <TableCell className="py-4 text-xs">sarah.williams@example.com</TableCell>
          <TableCell className="py-4 text-xs">+1-567-890-1234</TableCell>
          <TableCell className="py-4 text-xs">ABC Hospital</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="py-2">5</TableCell>
          <TableCell className="py-2">
            <div className="font-medium text-xs">Dr. Michael Brown</div>
          </TableCell>
          <TableCell className="py-4 text-xs">michael.brown@example.com</TableCell>
          <TableCell className="py-4 text-xs">+1-678-901-2345</TableCell>
          <TableCell className="py-4 text-xs">Healthcare Clinic</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </CardContent>
</Card>

    </div>
  </main>
</div>
)
}