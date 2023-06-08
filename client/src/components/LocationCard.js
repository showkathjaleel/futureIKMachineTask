import React from 'react'
import Card from './Card'
import DomainQuotaCard from './DomainQuotaCard'

import Locations from './Locations'

const LocationCard = () => {
  return (
    <div className='lg-shadow w-full h-full bg-white ' >
      <div className='h-4/6 '>
      <Locations/>
      </div>
      

 
      <div className='h-2/6 bg-cyan-400'>
      <DomainQuotaCard />
      </div>
      
         
    </div>
  )
}

export default LocationCard