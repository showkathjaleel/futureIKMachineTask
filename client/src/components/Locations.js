import React from 'react'
import location from '../images/location.png'

const Locations = () => {
  return (
    <div>
    <div className='shadow-lg '> 
      <p className='font-semibold pt-5'>Location - devices</p>
      <img className='w-full h-72 pt-3 ' src={location} alt="" /> 
      </div>
    </div>
  )
}

export default Locations