import React from 'react'
import SlackLogo from '../images/SlackLogo'
import Workspace from './Workspace'
import Button from '@mui/material/Button'
export default function FindWorkspace() {
  return (
    <div className="flex flex-col items-center ">
        <div className="py-10"><SlackLogo width={"150"}/></div>
        <div className="font-bold text-5xl pb-4">Sign in to your workspace</div>
        <div className="text-xl text-gray-700">Enter your workspace's Slack URL</div>
        <input type="text" className="border-2 mt-5 placeholder:text-gray-700 w-[400px] indent-2 outline-none focus:ring ring-blue-2 rounded-md p-2 border-solid border-gray-300" placeholder="your-workspace.slack.com"/>
        <Button variant="contained" style={{backgroundColor: '#4a154b',fontSize: '15px', fontWeight: 'bold', color: 'white',marginTop: '20px', width: '400px', padding: '10px', textTransform: 'capitalize'}}>Continue</Button>
        <div className="text-sm flex flex-col pt-5">
            <div><span className="text-gray-500">Don't know your workspace URL?</span><button href="#" className="text-blue-900 font-semibold hover:underline">Find your workspaces</button></div>
            <div><span className="text-gray-500">Looking to create a workspace instead? </span><button href="#" className="text-blue-900 font-semibold hover:underline">Create a new workspace</button></div>
        </div>
        <Workspace btn="LAUNCH"/>
    </div>
  )
}
