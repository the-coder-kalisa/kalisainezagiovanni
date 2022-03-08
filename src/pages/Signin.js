import React from 'react'
import SlackLogo from '../images/SlackLogo'
import Button from '@mui/material/Button'
import Google from './sigin/google'
import AppleIcon from '@mui/icons-material/Apple';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import Workspace from './Workspace'
import Bottomer from './Bottomer'
import {Outlet, Link} from 'react-router-dom'
export default function Signin() {
  const btn = (color, title, icon) =>{
    return(
      <Button variant="outlined" className="h-14 font-semibold" style={{padding: "10px", fontWeight: '600', border: `2px solid ${color}`, color: color, width: "400px"}}>{icon}<span className="pl-5">{title}</span></Button>
      )
    }
    return (
    <div className="flex flex-col items-center">
        <div className="py-10"><SlackLogo width="150"/></div>
        <div className="font-bold text-5xl pb-5">Sign in to Slack</div>
        <div className="text-lg font-normal pb-5 text-gray-500">We suggest using the <span className="font-semibold text-gray-600">email address you use at work</span></div>
        <div className="py-5">{btn("#4285f4", "Sign in with Google", <Google />)}</div>
        <div>{btn("black", "Sign in wiht Apple", <AppleIcon />)}</div>
        <div className="flex justify-center mt-4 items-center"><hr className="text-xl bg-[#ddd] h-[2px] w-[180px]" /><span className="px-2">OR</span><hr className="text-xl bg-[#ddd] h-[2px] w-[180px]" /></div> 
        <input type="text" className="border-2 mt-5 placeholder:text-gray-500 w-[400px] indent-2 outline-none focus:ring ring-blue-2 rounded-md p-2 border-solid border-gray-300" placeholder="name@work-email.com"/>
        <Button variant="contained" style={{backgroundColor: '#4a154b', color: 'white',marginTop: '20px', width: '400px', padding: '10px'}}>Sign IN with Email</Button>
        <div className="w-[400px] p-3 bg-[#f3f3f3] h-16 mt-5 shadow-md text-[#939295] rounded-md flex justify-around">
          <div><AutoAwesomeOutlinedIcon fontSize="small" className="text-gray-500"/></div>
          <div>
            <span>We'll email you a magic code for a password-free <br /> sign in. Or you can&nbsp;</span><Link to="FindWorkspace"><a href="FindWorkspace" className="text-[#1264b0] hover:underline">sign in manually instead.</a></Link><Outlet />
          </div>
        </div>
        <div>
          <Workspace btn="OPEN"/>
        </div>
          <Bottomer />
        <div className="absolute top-8 right-10 text-sm flex flex-col items-end"><span>New to slack?</span><Link to="Truesignup"><a href="Truesignup" className="text-[#1264b0] hover:underline font-semibold">Create an account</a></Link><Outlet /></div>
      </div>
  )
}