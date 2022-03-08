import React from 'react'
import Mybutton from './Mybutton'
import Button from '@mui/material/Button';
export default function Following(){
    const mystyle={
        color: 'white',
        border: '2px solid white'
    }
    return(
        <>
        <div className="bg-[#4a154b] h-[350px] overflow-hidden flex flex-col justify-around text-black text-center rounded-b-full">
            <span className="text-4xl text-white mt-8 basis-1/5 font-bold">Choose a better way to work</span>
            <div className="basis-3/5">
            <Mybutton title={"DOWNLOAD SLACK FOR WINDOWS"}/>
            <Button className="mybtn" variant='outlined' style={mystyle}>TALK TO SALES</Button>
            </div>
        </div>
        </>
    )
}