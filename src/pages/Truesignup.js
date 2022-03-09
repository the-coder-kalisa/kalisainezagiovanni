import React, {useState} from 'react'
import SlackLogo from '../images/SlackLogo'
import Button from '@mui/material/Button'
import Bottomer from './Bottomer'
import {Outlet, Link} from 'react-router-dom'

export default function Truesignup() {
  const [value, setValue] = useState("")
  return (
    <div className="flex flex-col items-center">
        <div className="py-8"><SlackLogo width="150"/></div>
        <div className={`flex flex-col items-center`}>
        <div className="text-5xl font-bold">First, enter your email</div>
        <div className="text-xl my-5"><span>We suggest using the </span><span className="font-semibold text-gray-700">email address you use at work.</span></div>
        <form method="post"  action="#" className="flex flex-col">
            <input autocomplete="off" type="text" value={value} onChange={(e)=>{setValue(e.target.value)}} className="border-2 my-3 placeholder:text-gray-700 w-[400px] indent-2 outline-none focus:ring ring-blue-2 rounded-md p-2 border-solid border-gray-300" placeholder="name@work-email.com"/>
            <Link to="Verification"><Button type="submit" href="Verification" variant="contained" style={{backgroundColor: '#4a154b', color: 'white',marginTop: '10px', width: '400px', padding: '10px'}}>continue</Button></Link><Outlet />
            <div className="w-[25rem] py-5">
              <label className="cursor-pointer"><input type="checkbox"/><span>It's okay to send me emails about Slack</span></label></div>
            <div className="mb-20 text-base text-gray-400">
            By continuing, you're aggreeing to our Customer Terms of <br /> Service, User Terms of Servie, Privacy Policy, and Cookie <br /> Policy.
            </div>
        </form>
        <Bottomer />
        </div>
        </div>
  )
  }