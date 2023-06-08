import React from 'react'
import Sidebar from '../components/Sidebar'
import MainContainer from '../components/MainContainer'

const Dashboard = () => {
  return (
    <div className="flex">
    <div className='flex col-span-1'>
   <Sidebar/ >
    </div>
    <div className='flex col-span-11'>
     < MainContainer />
    </div>

  </div>
  )
}

export default Dashboard