import React from 'react'

import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function Bottomer() {
    const language = [
        <LanguageIcon fontSize='small' style={{paddingRight: '2px'}}/>,
        "Change region",
        <KeyboardArrowDownIcon fontSize='small'/>
    ]
    const bottomer = [
      "Privacy & Terms", "Contact Us", language
    ]
  return (
    <div className="flex justify-around w-[500px] px-14 pb-10">
    {bottomer.map((bots)=>(<button href="#" className="hover:underline text-gray-500 hover:text-blue-900">{bots}</button>))}
  </div>
  )
}

export default Bottomer