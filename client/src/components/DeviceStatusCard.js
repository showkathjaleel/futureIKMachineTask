import React from 'react'

const DeviceStatusCard = () => {
  return (
    <div className='lg-shadow w-96 h-64  bg-white mr-5 mb-2'>
            <p className='font-semibold pl-5 pt-3'>DeviceStatus</p>
        
       

<table className='w-full '>
        <tr >
            <td className='ml-2 p-2 text-xs font-semibold'><span className='p-2 mt-4'>Device Name</span></td>
            <td className='pl-6 p-2 text-xs font-semibold'><span className='p-2 mt-4'>Last response</span></td>
            <td className='pl-6 m-4 p-2 font-semibold'>
                 <span className=' text-xs'>Status</span></td>
           
        </tr>

        <tr  className='bg-gray-200 mt-1'>
            <td className='p-2 text-xs'><span className='p-2 mt-4'>futureIK Device 01</span></td>
            <td className='pl-6 p-2 text-xs'><span className='p-2 mt-4'>Wed Apr 26 2023 ; 03:00:10</span></td>
            <td className='pl-6 m-4 p-2'><button className='  bg-red-800 rounded-sm h-6 w-12 '> <span className='text-white text-xs'>offline</span></button></td>
           
        </tr>

        <tr  className=' mt-1'>
            <td className='p-2 text-xs'><span className='p-2 mt-4'>futureIK Device 02</span></td>
            <td className='pl-6 p-2 text-xs'><span className='p-2 mt-4'>Wed Apr 26 2023 ; 03:00:10</span></td>
            <td className='pl-6 m-4 p-2'><button className='   bg-green-800 rounded-sm h-6 w-12 '> <span className='text-white text-xs'>offline</span></button></td>
  
        </tr>

        <tr  className='bg-gray-200 mt-1 '>
            <td className='p-2 text-xs'><span className='p-2 mt-4'>futureIK Test  01</span></td>
            <td className='pl-6 p-2 text-xs'><span className='p-2 mt-4'>Wed Apr 26 2023 ; 03:00:10</span></td>
            <td className='pl-6 m-4 p-2'><button className='  bg-green-800 rounded-sm h-6 w-12 '> <span className='text-white text-xs'>online</span></button></td>
            
        </tr>

        <tr  className=' mt-1 '>
            <td className='p-2 text-xs'><span className='p-2 mt-4'>futureIK Test  02</span></td>
            <td className='pl-6 p-2 text-xs'><span className='p-2 mt-4'>Wed Apr 26 2023 ; 03:00:10</span></td>
            <td className='pl-6 m-4 p-2'><button className='  bg-red-800 rounded-sm h-6 w-12 '> <span className='text-white text-xs'>online</span></button></td>
       
        </tr>




        </table>

        {/* </div> */}

        
        </div>
  )
}

export default DeviceStatusCard