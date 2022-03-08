import React from 'react'
import svg from '../../images/Renamed.png'
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Last() {
    const language = [<LanguageIcon fontSize="medium" style={{paddingRight: "5px"}}/>, "Change Region", <KeyboardArrowDownIcon fontSize="small"/>]
    const first = ["Slack vs. Email", "Channels", "Engagement", "Scale", "Watch the Demo"];
    const second = ["Features", "Integrations", "Enterprise", "Solutions"]
    const third = ["Plans", "Paid vs. Free"];
    const fourth = ["Partners", "Developers", "Community", "Apps", "Blog", "Help Center", "Events"]
    const fifth = ["About Us", "Leadership", "Investor Relations", "News", "Media Kig", "Careers"];
    const last = ["Status", "Privacy", "Terms", "Cookie Preferences", "Contact Us", language]
    const lastone = [<CloudDownloadOutlinedIcon fontSize="medium" style={{paddingRight: "5px"}}/>, "Download Slack"]
    const lastones = [<TwitterIcon fontSize='small'/>, <FacebookIcon fontSize='small'/>, <TwitterIcon fontSize="small" />, <YouTubeIcon fontSize='small'/>, <LinkedInIcon fontSize="small"/>]
    const display = (data, title) =>{
       return(
        <div>
             <h1 className="text-black font-semibold">{title}</h1>
             {data.map((div)=>
              (<button href="#" className="flex pt-4 text-gray-700 flex-col hover:text-blue-800">
             {div}
              </button>))}
        </div>
       )
    }
  return (
      <div className="">
    <div className="flex ml-24 mr-24 justify-around mt-16 items-start border-b-4 border-solid pb-5 border-gray-300">
        <img alt="svg" src={svg} />
        {display(first, "WHY SLACK ?")}
        {display(second, "PRODUCT")}
        {display(third, "PRICING")}
        {display(fourth, "RESOURCES")}
        {display(fifth, "COMPANY")}
    </div>
<div className="flex justify-around pt-8">
    <div className="flex">
        {last.map((latest)=>(
            <div className="text-black pl-4 font-semibold hover:text-blue-900">
        <button href="#">{latest}</button>
        </div>))}
    </div>
<div className="flex">

        <div className="pl-5 pr-5 font-semibold text-base text-blue-900">
        {lastone.map((latest)=>(
            <button href="">{latest}</button>
        ))}
            </div>


        {lastones.map((latest)=>(
            <div className="text-black pl-5 pr-5 font-semibold hover:text-blue-900">
        <button href="">{latest}</button>
        </div>))}

    </div>
</div>
<div className="text-xs p-10 pl-28">&copy;2022 Slack Technologies, LLC, a Salesforce company. All rights reserved. Various trademarks held by their respective owners.</div>
</div>
  )
}

export default Last