import React from 'react'

const Darkmode = () => {
    const dark ="https://framerusercontent.com/images/i3YnSugQ4y5y3wnuunvdpCOz8.svg"
  
  return (
    <div className='fixed bottom-8 left-4 lg:left-16'>
          <button className='bg-white rounded-full p-2'>  <img src={dark} alt="" /></button>
    </div>
  )
}

export default Darkmode