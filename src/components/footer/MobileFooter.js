import React from 'react'
import FooterLink from './FooterLink'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { Fade } from "react-awesome-reveal";


const MobileFooter = () => {
  return (
    <footer className='py-3 mt-9 border-gray border-dotted border-t-[2px] w-full lg:hidden'>
     <Fade direction='left' cascade={true} duration={300}>
     <ul className='flex gap-8 justify-center text-center'>
        <FooterLink icon={<AiFillGithub />} address="https://github.com/Progress2002" />
        <FooterLink icon={<AiFillLinkedin />} address="https://www.linkedin.com/in/progress-c-ezeamaka/" />
        <FooterLink icon={<BsTwitter />} address="https://twitter.com/Progress_2002" />
        <FooterLink icon={<HiOutlineMail />} address="mailto:ezeamakachisom2002@gmail.com" />
      </ul>
     </Fade>
    </footer>
  )
}

export default MobileFooter
