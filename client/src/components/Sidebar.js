import React from 'react'
import dashboard from '../images/dashboard.png'
import logo  from '../images/logo.png'
import campaign from '../images/campaign.png'
import channels  from '../images/channels.png'
import commands from '../images/command.png'
import device  from '../images/devices.png'
import history  from '../images/history.png'
import library  from '../images/library.png'
import zone  from '../images/zone.png'

const menus=[
    {icon:dashboard , name:'Dashboard'},
    {icon:campaign , name:'Campaigns'},
    {icon:commands , name:'Commands'},
    {icon:zone , name:'Zones'},
    {icon:channels , name:'Channels'},    
    {icon:device , name:'Devices'},
    {icon:library , name:'Media Library'},
    {icon:history , name:'History'},
    
   
]
const Sidebar = () => {
  return (
    <div className='w-52 p-5 bg-blue-950 text-white h-screen pr-2'>
         <div className=' flex item-center '>
        <img src={logo} alt='logo'/> 
        </div>

      {menus.map((menu)=> (
                  <ul className="pt-5">
                  <li className="pt-3 flex">
                      <img src={menu.icon}  className='w-6 h-6' />
                      <span className="hidden md:block px-3 font-semibold">{menu.name}</span>
                  </li>
                </ul>
      ))}


        
    </div>
  )
}

export default Sidebar