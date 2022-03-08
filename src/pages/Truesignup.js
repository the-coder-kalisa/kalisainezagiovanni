import React, {useState} from 'react'
import SlackLogo from '../images/SlackLogo'
import Button from '@mui/material/Button'
import Bottomer from './Bottomer'

export default function Truesignup() {
  const [signin, setSignin] = useState("flex")
  const [value, setValue] = useState("")
  const [inputs, setInputs] = useState({});
  const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values=>({...values, [name]: value}))
  }
  const handelSubmit = (e)=>{
    e.preventDefault();
    console.log(inputs);
  }
  const createAccount = (e)=>{
    e.preventDefault();
    setSignin("hidden")
    setConfirm("flex")
}
  const [confirm, setConfirm] = useState("hidden")
  return (
    <div className="flex flex-col items-center">
        <div className="py-8"><SlackLogo width="150"/></div>
        <div className={`${signin} flex-col items-center`}>
        <div className="text-5xl font-bold">First, enter your email</div>
        <div className="text-xl my-5"><span>We suggest using the </span><span className="font-semibold text-gray-700">email address you use at work.</span></div>
        <form method="post" onSubmit={createAccount} action="#" className="flex flex-col">
            <input autocomplete="off" type="text" value={value} onChange={(e)=>{setValue(e.target.value)}} className="border-2 my-3 placeholder:text-gray-700 w-[400px] indent-2 outline-none focus:ring ring-blue-2 rounded-md p-2 border-solid border-gray-300" placeholder="name@work-email.com"/>
            <Button type="submit" variant="contained" style={{backgroundColor: '#4a154b', color: 'white',marginTop: '10px', width: '400px', padding: '10px'}}>continue</Button>
            <div className="w-[25rem] py-5">
              <label className="cursor-pointer"><input type="checkbox"/><span>It's okay to send me emails about Slack</span></label></div>
            <div className="mb-20 text-base text-gray-400">
            By continuing, you're aggreeing to our Customer Terms of <br /> Service, User Terms of Servie, Privacy Policy, and Cookie <br /> Policy.
            </div>
        </form></div>
        <div className={`${confirm} flex-col items-center`}>
          <div className="text-5xl font-bold">Check your email for a code</div>
          <div className="text-center py-5 text-xl text-gray-700">We've sent a 6&minus;digit code to <span className='font-[650]'>{value}</span>. The coder expires shortly,<br />so please enter it soon.</div>
          <form onSubmit={handelSubmit} method="post" action="#">
            <input autocomplete="off" name="firstNumber" value={inputs.first} onChange={handleChange} type={"text"} maxLength="1" className="outline-none text-3xl text-center rounded-l-md border-y-2 border-l-2 border-solid w-20 h-20 border-gray-400"/>
            <input autocomplete="off" name="second" type={"text"} value={inputs.second} onChange={handleChange} maxLength="1" className="outline-none text-3xl text-center border-y-2 border-l-2 border-solid w-20 h-20 border-gray-400"/>
            <input autocomplete="off" name="third" type={"text"} maxLength="1" value={inputs.third} onChange={handleChange} className="outline-none text-3xl text-center border-y-2 border-l-2 border-solid border-r-2 w-20 h-20 border-gray-400"/><span className="text-3xl mx-1">&minus;</span>
            <input autocomplete="off" name="fourth" type={"text"} maxLength="1" value={inputs.fourth} onChange={handleChange} className="outline-none text-3xl text-center border-y-2 border-l-2 border-solid w-20 h-20 border-gray-400"/>
            <input autocomplete="off" name="fifth" type={"text"} maxLength="1" value={inputs.fifth} onChange={handleChange} className="outline-none text-3xl text-center border-y-2 border-l-2 border-solid w-20 h-20 border-gray-400"/>
            <input autocomplete="off" name="sixth" type={"text"} maxLength="1" value={inputs.sixth} onChange={handleChange} className="outline-none text-3xl text-center border-y-2 border-l-2 border-r-2 border-solid w-20 h-20 border-gray-400 rounded-r-md"/>
            <Button autoFocus type="submit"></Button>
          </form>
        </div>
        <Bottomer />
    </div>
  )
}

