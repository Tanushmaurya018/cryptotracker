import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=" flex h-16 md:h-20 bg-gray-800 text-red-500 justify-between items-center py-2 px-2 md:px-5 lg:px-20 uppercase">
      <Link href="/" className='font-bold'>CryptoTracker</Link> 
      <span>All Rights Reserved</span> 

    </div>
  )
}

export default Footer