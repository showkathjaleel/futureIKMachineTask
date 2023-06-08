import React from 'react'
import Header from './Header'
import ProjectContainer from './ProjectContainer'
import Card from './Card'
import CardContainer from './CardContainer'

const MainContainer = () => {
  return (
    <div className='w-full bg-gray-200 '>
        <div>
        <Header/ >
        </div>
      
        <div className='mt-2 pt-5'>
        <ProjectContainer />
        </div>

        <div className='mt-2 pt-5'>
        <CardContainer/>
        </div>
        
        

    </div>
  )
}

export default MainContainer

