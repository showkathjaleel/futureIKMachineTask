import React from 'react'
import Card from './Card'
import GeneralInfoCard from './GeneralInfoCard'
import LiveStatusCard  from './LiveStatusCard'
import  DeviceStatusCard  from './DeviceStatusCard'
import ActivityLogCard from './ActivityLogCard'
const CardList = () => {
  return (
   <div className='flex flex-wrap'>
    
    <GeneralInfoCard />
    <LiveStatusCard />
    {/* <div className='flex'> */}
    <DeviceStatusCard />
    <ActivityLogCard />
     {/* </div> */}
    </div>
  )
}

export default CardList