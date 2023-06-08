import React from 'react'
import CardList from './CardList'
import LocationCard from './LocationCard'
import DomainQuotaCard from './DomainQuotaCard'


const CardContainer = () => {
  return (
    <div className='flex h-full mx-5'>
        <div className='w-8/12 ' >
        <CardList />
        </div>
        <div className='w-4/12 bg-green-400'>
      <LocationCard />
        </div>
    </div>
  )
}

export default CardContainer