import React from 'react'
import Avatar from '@mui/material/Avatar';
import learnjs from '../images/learnjs.jpg'
import frontendbrazil from '../images/frontendbrazil.jpg'
import frontendlondon from '../images/frontedlondon.png'
import product from '../images/product.jpg'
import remote from '../images/remote.png'
import Button from '@mui/material/Button'

export default function Workspace({btn}) {
  return (
    <div className="mt-8 mb-14">
    <h1 className="my-5 text-center font-semibold">You're already signed in to...</h1>
    <div>
       <div className="border-2 items-center border-solid border-gray-300 p-5 rounded-lg w-[500px]">{workspace.map((div)=>(
         <div className="flex p-2 justify-between">
           <div className="flex items-center">
                    {div.avatar}
                    <div className="flex flex-col pl-2">
                       <div className="text-lg font-medium">{div.title}</div>
                       <div className="text-sm text-gray-500">{div.description}</div>
                    </div>
            </div>
           <Button variant="outlined" style={{color: 'black', border: '1px solid rgb(209 213 219)', height: '35px'}}>{btn}</Button>
         </div>
       ))}</div>
    </div>
  </div>
  )
}
const styles = {backgroundColor: 'rgb(97,96,97)', fontWeight: 700}
const workspace = [
  {title: 'RCA_group', description: 'rcagroupworkspace.slack.com', avatar: <Avatar variant='rounded' className="text-xl font-bold" style={styles}>R</Avatar>},
  {title: 'Frontend Brasil', description: 'frontendbrasil.slack.com', avatar: <Avatar variant='rounded' src={`${frontendbrazil}`} />},
  {title: 'frontendlondon', description: 'frontendlondon.slack.com', avatar: <Avatar variant='rounded' src={`${frontendlondon}`} />},
  {title: 'WeLearnJS', description: 'learnjs.slack.com', avatar: <Avatar variant='rounded' src={`${learnjs}`}/>},
  {title: 'Product School', description: 'product-school.slack.com', avatar: <Avatar variant='rounded' src={`${product}`} />},
  {title: 'RemotePOC', description: 'remotepoc.slack.com', avatar: <Avatar variant='rounded' src={`${remote}`} style={styles}>Get</Avatar>},
  {title: 'Giovanni the coder', description: 'giovannithecoder.slack.com', avatar: <Avatar variant='rounded' style={styles}>GT</Avatar>},
  {title: 'Brainiacs', description: 'brainiacsnetwork.slack.com', avatar: <Avatar variant='rounded' style={styles}>B</Avatar>}
]