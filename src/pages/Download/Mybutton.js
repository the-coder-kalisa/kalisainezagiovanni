import React from 'react'
import Button from '@mui/material/Button';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import {Outlet, Link} from 'react-router-dom'

export default function style({title, mystyles, itheight,color, textColor, id}) {
    const mystyle = {
        background: 'white',
        zIndex: '10',
        color: `${textColor}`,
        fontSize: '15px',
        fontWeight: 600,
        marginTop: mystyles,
        height: itheight,
        backgroundColor: `${color}`,
        border: `${color}`
    }
    if(title==="LAUNCH SLACK"){
      return(
    <Button className="mybtn" variant='contained' style={mystyle}><Link to="/Signup">{title}<KeyboardArrowDownSharpIcon /></Link><Outlet /></Button>
      )
    }
    if(title==="DOWNLOAD(64)" || title === "DOWNLOAD SLACK FOR WINDOWS"){
      mystyle.color = "#4a154b"
      mystyle.marginRight = "50px"
      return(
        <Button className="mybtn" variant='contained' style={mystyle}>{title}</Button>
        )
      }
      return (
    <Button className="mybtn" variant='contained' style={mystyle}>{title}<KeyboardArrowDownSharpIcon /></Button>
  )
}
