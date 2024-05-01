import React from 'react'
import { Link } from 'react-router-dom';
import { Button} from 'antd';
import { Input } from "../../../components/ui/input"
import picture from '../../../assets/male.png';
import { FaArrowLeft} from 'react-icons/fa';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "../../../components/ui/dropdown-menu"

export default function toplogoandbar(props) {
  return (
    <div>
    <div className="flex items-center gap-4">
    <Input
      type="search"
      placeholder={props.searchbar}
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
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '40px' }}>
      <Link to="/">
      <Button className="button-style" style={{ border: '2px dotted rgb(137, 190, 197, 1)' }}>
        <FaArrowLeft style={{ marginRight: '4px' }} />
      </Button>
    </Link>
        <h2 style={{ fontFamily: 'Poppins, sans-serif', color: 'black', fontWeight: '600', marginLeft: '10px'  }}>{props.titlepage}</h2>
    </div>
    </div>
  )
}
