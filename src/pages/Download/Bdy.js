import React, {useState} from 'react'
import bagy from '../../images/slack-client-windows-desktop.png'
import Mybutton from './Mybutton'
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function Bdy() {
    const [thicker, setThicker] = useState()

    const handelthickness = () =>{
        setThicker("decoration-auto")
    }
    const Rehandelthickness = ()=>{
        setThicker("decoration-1")
    }

    return (
        <>
    <div className="flex justify-around bg-[#4a154b] h-[100vh] items-center pt-24">
        <div className="flex flex-col">
            <span className="text-white p-3 text-7xl font-bold">Slack for<br /> Windows</span>
            <span className="text-white p-3 text-xl">With the Slack app, your team is <br /> never more than a click away.</span>
            <Mybutton title="DOWNLOAD(64)" mystyles="10px" itheight="60px"/>
            <button href="#" style={{color: '#38b6de'}} onMouseEnter={handelthickness} onMouseLeave={Rehandelthickness} className={`underline underline-offset-4 text-lg ${thicker} pt-5 pb-5`}>Download on the Microsoft Store</button>
            <button href="#" style={{color: '#38b6de'}} className="text-2xl font-bold">Looking for mobile?<ArrowDropDownCircleOutlinedIcon /></button>
        </div>
        <div className="flex flex-col">
            <img src={bagy} alt="thecoder" width="100%"/>
            <div className="flex justify-between"><div>
               <span className="text-white">VERSION 4.24.0&minus;</span>
               <button href="#" style={{color: '#38b6de'}} className={`text-lg pt-5 pb-5`}>What's new</button>
               <span className="text-white p-2">/</span>
               <button href="#" style={{color: '#38b6de'}} className={`text-lg pt-5 pb-5`}>Get the beta</button>
               <span className="text-white p-2">/</span><button href="#" style={{color: '#38b6de'}} className={` pt-5 pb-5`}>Enterprise deployements</button></div>
               <div>
                   <button href="#" style={{color: '#38b6de'}} className={`text-lg pt-5 pb-5 border-0 hover:border-b-2  border-solid border-blue-600 transition-all:border-1`}>Download 32&minus;bit app<ArrowDownwardIcon /></button>
               </div>
            </div>
        </div>
    </div>
        </>
  )
}

export default Bdy