import React from 'react'
import { Link } from 'react-router-dom'

const FooterLink = ({ address, icon }) => {
  return (
    <li className='text-text focus:text-sc_color'>
      <Link to={address} target='blank' className='text-2xl'>{icon}</Link>
    </li>
  )
}

export default FooterLink
