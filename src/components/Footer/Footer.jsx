import React from 'react';
import logo from "../../assets/logo.png"
import { NavLink } from 'react-router';
import { Twitter, Facebook, Linkedin } from 'lucide-react';


const Footer = () => {
    return (
       <footer className='bg-black  p-12 font-bold'>
        <div className='flex justify-between'>
              <div className="flex items-center">
        <img src={logo} className="w-10 h-10" alt="" />
            <NavLink to="/" className={`text-[#632EE3]`}>HERO.IO</NavLink>

    </div>
    <div className='text-white '>
        <h2 >Social Link</h2>
       <div className='flex'> 
         <Twitter />
        <Facebook />
        <Linkedin />
       </div>

    </div>
     

        </div>
        <hr className='text-white m-4' />
        <h2 className='text-center text-white'>Copyright © 2025 - All right reserved</h2>
         


</footer>
    );
};

export default Footer;