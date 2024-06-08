import React from 'react'
import { logo_url } from './constants/utils'

const Header = () => {
  return (
    <div className='flex bg-gradient-to-b from-black z-10  '>
      <img 
      className='w-12 m-4 '
      src={logo_url} 
      alt="logo" />
    </div>
  )
}

export default Header
