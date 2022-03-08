import React from 'react'
import SlackLogo from './SlackLogo'
import Button from '@mui/material/Button'
export default function Login() {
  return (
    <div className="flex flex-col w-[700px]">
        <SlackLogo width="150"/>
        <div className="text-7xl">First, enter your email</div>
        <div className="text-gray-400">We suggest using the email address you use at work.</div>
        <input type="text" placeholder="name@work-email.com" className='w-[55%] h-7 outline-none border-2 border-solid border-gray-400 focus:border-blue-500 focus:outline-blue-300 outline-offset-0 rounded-md placeholder:text-gray-600 text-md p-5' style={{ outlineWidth: "3.5px"}}/>
        <Button variant="contained" style={{backgroundColor: '#4a154b', width: '55%', textTransform: 'capitalize'}}>Continue</Button>
    </div>
  )}