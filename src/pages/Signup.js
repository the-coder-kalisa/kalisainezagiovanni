import React from 'react'
import SlackLogo from '../images/SlackLogo'
import Button from '@mui/material/Button'
import left from '../images/left.png'
import {Outlet, Link} from 'react-router-dom'

function Signup() {
  const mystyle = {
    color: "white",
    backgroundColor: "#007a5a",
    width: '70%',
    fontWeight: 'bold', 
  }
  return (
    <div className="h-[100vh] text-xl flex justify-around items-center bg-[#4a154b]">
      <div className="w-100">
        <SlackLogo  width="100" mrFill="white"/>
        <div className="text-5xl py-5 text-white font-bold">Slack brings the <br />team together <br /> wherever you are</div>
        <Link to="Signin"><Button variant="contained" style={mystyle}>Sign In to Slack</Button></Link><Outlet />
        <div className="text-base text-gray-300">We'll take you to your web browser to sign in and then <br /> bring you back here</div>
        <div className="text-white pt-40 text-base">Is your team new to Slack?<button href="#" className="underline">Create a new workspace</button></div>
      </div>
        <img alt="thecoder" src={left} width="600"/>
        <workspace />
    </div>
  )
}

export default Signup