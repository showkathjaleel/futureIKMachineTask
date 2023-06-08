import React from 'react'
import account from '../images/account.png'
import notification from '../images/notification.png'
import headset from '../images/headset.png'
const menus =[{icons:headset},{icons:notification},{icons:account}]
const Header = () => {
  return (
    
    <div className='h-16 bg-gray-50 relative'>
          <div className='flex justify-end'>
        {menus.map((menu,index)=> (         
            <img className='h-6 w-6  mt-4 mr-12' src={menu.icons} alt=""  key={index}/>   
        ))}
        
        </div>
    </div>
  )
}

export default Header
// box-sizing: border-box;

// position: absolute;
// width: 1317px;
// height: 68px;
// left: 219px;
// top: 0px;

// background: #FAFAFA;
// border: 1px solid #FAFAFA;
// border-radius: 0px;