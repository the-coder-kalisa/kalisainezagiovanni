import React, {useContext, useState} from 'react'
// import Context from './store.js'
import Bottomer from './Bottomer'
import SlackLogo from '../images/SlackLogo'

export default function Verification() {
    // const yourEmail = useContext(Context)
    const [inputs, setInputs] = useState({});
    const handleChange = (e)=>{
        const name = e.target.name;
        const myvalue = e.target.value;
        setInputs(values=>({...values, [name]: myvalue}))
      }
      const handelSubmit = (e)=>{
        e.preventDefault();
        console.log(inputs);
      }
      
  return (
    <div>
      <div className="py-8 m-auto"><SlackLogo width="150"/></div>
<div className={`flex flex-col items-center`}>
          <div className="text-5xl font-bold">Check your email for a code</div>
          <div className="text-center py-5 text-xl text-gray-700">We've sent a 6&minus;digit code to <span className='font-[650]'>{}</span>. The coder expires shortly,<br />so please enter it soon.</div>
          <form onSubmit={handelSubmit} method="post" action="#">
            <input autocomplete="off" name="firstNumber" value={inputs.first} onChange={handleChange} type={"text"} maxLength="1" className="outline-none text-3xl text-center rounded-l-md border-y-2 border-l-2 border-solid w-20 h-20 border-gray-400"/>
            <input autocomplete="off" name="second" type={"text"} value={inputs.second} onChange={handleChange} maxLength="1" className="outline-none text-3xl text-center border-y-2 border-l-2 border-solid w-20 h-20 border-gray-400"/>
            <input autocomplete="off" name="third" type={"text"} maxLength="1" value={inputs.third} onChange={handleChange} className="outline-none text-3xl text-center border-y-2 border-l-2 border-solid border-r-2 w-20 h-20 border-gray-400"/><span className="text-3xl mx-1">&minus;</span>
            <input autocomplete="off" name="fourth" type={"text"} maxLength="1" value={inputs.fourth} onChange={handleChange} className="outline-none text-3xl text-center border-y-2 border-l-2 border-solid w-20 h-20 border-gray-400"/>
            <input autocomplete="off" name="fifth" type={"text"} maxLength="1" value={inputs.fifth} onChange={handleChange} className="outline-none text-3xl text-center border-y-2 border-l-2 border-solid w-20 h-20 border-gray-400"/>
            <input autocomplete="off" name="sixth" type={"text"} maxLength="1" value={inputs.sixth} onChange={handleChange} className="outline-none text-3xl text-center border-y-2 border-l-2 border-r-2 border-solid w-20 h-20 border-gray-400 rounded-r-md"/>
          </form>
          <div className="mt-24">
        <Bottomer />
        </div>
        </div>
    </div>
  )
}
