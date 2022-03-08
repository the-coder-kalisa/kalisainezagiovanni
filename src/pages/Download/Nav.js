import React, { useState } from 'react'
import SlackLogo from '../../images/SlackLogo'
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import Button from '@mui/material/Button';
import Mybutton from './Mybutton'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function Nav() {
    const [rotate, setRotate] = useState()
    const [visibility, setVisibility] = useState("hidden");
    const Rotate = () =>{
        setRotate('rotate-180')
        setVisibility('block')
    }
    const Rerotate = () =>{
        setRotate('rotate-0')
        setVisibility('hidden')
    }
    const [bgColor, setBgColor] = useState('bg-[#4a154b]')
    const [borderRadius, setBorderRadius] = useState("rounded-none")
    const [color, setColor] = useState("white")
    const [another, setAnother] = useState("white")
    const [anotherColor, setAnotherColor] = useState("#4a154b")
    window.addEventListener('scroll', ()=>{
        if(window.scrollY >= 100){
            setBgColor("bg-white");
            setBorderRadius("rounded-full")
            setColor("black")
            setAnother("#4a154b")
            setAnotherColor("white")
        }
        else{
            setBgColor("bg-[#4a154b]");
            setBorderRadius("rounded-none")
            setColor("white")
            setAnother(color)
            setAnotherColor('#4a154b')    
        }
    })
    const notsearch = () =>{
        setBgColor("bg-[#4a154b]");
        setBorderRadius("rounded-none")
        setColor("white")
        setAnother("white")
        setAnotherColor('#4a154b')
        setNavs(["Solutions", "Enterprise", "Resources", "Pricing"])
        setFlexers("flex")
        setPosition("around ")
        // hideshow();
    }
    const search = () =>{
        setBgColor("bg-white");
        setBorderRadius("rounded-full")
        setColor("black")
        setAnother("#4a154b")
        setAnotherColor("black")
        setNavs([])
        setFlexers("hidden")
        setPosition("start")
        setshow();
    }
    const [position, setPosition] = useState("around")
    const p2 = '25px'
    const p1 = '5px'
    const setshow = ()=>{
        setBgColor("bg-white");
        setBorderRadius("rounded-full")
        setBgColor("bg-white");
        setBorderRadius("rounded-full")
        setColor("black")
        setAnother("#4a154b")
        setAnotherColor("black")
        setNavs([])
        setPosition("start")
        setFlexers("hidden")
        setShow("block")
    }
    const hideshow = ()=>{
        setBgColor("bg-[#4a154b]");
        setBorderRadius("rounded-none")
        setColor("white")
        setAnother("white")
        setAnotherColor('#4a154b')
        setNavs(["Solutions", "Enterprise", "Resources", "Pricing"])
        setFlexers("flex")
        setPosition("around")
        setShow("none")
    }
    const [show,setShow] = useState("none")
    const products = ["Features", "Channels", "Digital HQ", "Integration", "Security", "Slack Connect", "Customers", "Download Slack"]
    const [navs, setNavs] = useState(["Solutions", "Enterprise", "Resources", "Pricing"])
    const [flexers, setFlexers] = useState("flex")
    const setNav = () =>{
        return(
                navs.map((div)=>(
                  <div className={`cursor-pointer  p-5 font-bold`}>
                    <span className={`hover:border-b-2 text-${color} border-solid border-${color}`}>{div}</span>
                 </div>
                ))
        )
    }
  return (
      <>
    <div className={`nav z-50 h-18 items-center ${position} flex ${borderRadius} fixed w-full ${bgColor} text-white justify-${position}`}>
        <div className='left flex'>
            <div className='cursor-pointer p-5 font-bold'><SlackLogo mrFill={color} width={100}/></div>
            <div className={`cursor-pointer p-5 ${flexers} font-bold text-${color}`} ><span onMouseEnter={Rotate} onMouseLeave={Rerotate}>Products&nbsp;<KeyboardArrowDownSharpIcon className={`${rotate}`}/></span></div>
            {setNav()}
        </div>
        <div className={`flex`}>
            <div className='cursor-pointer justify-start flex p-5 font-bold' onFocus={search} onBlur={notsearch}>
                 <Button style={{borderRadius: "9999px", color: `${color}`}}><SearchSharpIcon /></Button>
            </div>
        <div className={`right ${flexers}`}>
            <div className='cursor-pointer p-5 font-bold'><Button variant="outlined" style={{border: `2px solid ${another}`, color: `${another}`, padding: `${p1} ${p2}`}}>TALK TO SALES</Button></div>
            <div className='cursor-pointer p-5 font-bold'>{<Mybutton  color={another} textColor={anotherColor} title="LAUNCH SLACK"/>}</div>
        </div></div>
        
       
    </div>
    <div onMouseEnter={Rotate} onMouseLeave={Rerotate} className={`bg-white z-50 w-64 ml-52 fixed mt-12 ${visibility} rounded-xl p-3`}>
        {products.map((product)=>(<div className='p-1 text-black font-semibold hover:bg-blue-900 hover:text-white cursor-pointer w-full'>{product}</div>))}
    </div>
    <Autocomplete
    onFocus={setshow} onBlur={hideshow}
    className={`w-[1100px] fixed top-2 left-60 b-[none] z-50`} style={{display: `${show}`, height: "15px"}}
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={options.map((option) => option)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
      
      <Button variant="outlined"  className="z-50 top-3 h-12" style={{border: `2px solid #4a154b`,right: '32px',position: 'fixed',backgroundColor: 'white', color: '#4a154b', padding: `${p1} ${p2}`, display: `${show}`}}>SEARCH</Button>
</>
  )
}
const options = [
"What is slack connect", 
"Working with external organizations in slack",
"How much does Slack cost",
"webkit-transform-style:Learn Slack basics and more",
 "What are Slack security features?", 
 "Learn about Enterprise Grid", 
 "Get Slack certified", "Git hub", "gif", "google", "guest account"
]
export default Nav