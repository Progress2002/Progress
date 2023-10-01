import React from 'react'
import { Link } from 'react-router-dom'

const FooterLink = ({ address, icon }) => {
  return (
    <li className='text-text focus:text-sc_color'>
      <Link to={address} target='blank' className={`text-2xl md:text-2xl hover:-translate-y-1 block md:hover:text-sc_color duration-200 ${address === 'mailto:ezeamakachisom2002@gmail.com' && 'md:hidden'}`}>{icon}</Link>
    </li>
  )
}

export default FooterLink
