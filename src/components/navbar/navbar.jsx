import React from 'react';
import './navbar.css';
import {BiHomeAlt} from 'react-icons/bi'
import {BiUser} from 'react-icons/bi'
import {GiClassicalKnowledge} from 'react-icons/gi'
import {TbSchool} from 'react-icons/tb'
import {AiOutlineContacts} from 'react-icons/ai'
import { useState } from 'react';



const Navbar = () => {

  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' className={activeNav === '#' ? 'active' : ''} onClick={() => setActiveNav('#')}><BiHomeAlt></BiHomeAlt></a>
      <a href='#apropos'className={activeNav === '#about' ? 'active' : ''} onClick={() => setActiveNav('#about')}><BiUser></BiUser></a>
      <a href='#experience' className={activeNav === '#experience' ? 'active' : ''} onClick={() => setActiveNav('#experience')}><GiClassicalKnowledge></GiClassicalKnowledge></a>
      <a href='#formation' className={activeNav === '#formation' ? 'active' : ''} onClick={() => setActiveNav('#formation')}><TbSchool></TbSchool></a>
      <a href='#contact' className={activeNav === '#contact' ? 'active' : ''} onClick={() => setActiveNav('#contact')}><AiOutlineContacts></AiOutlineContacts></a>

    </nav>
  )
}

export default Navbar