import Image from 'next/image';
import React from 'react';
import { useRef } from 'react';
import Links from './Links';
import { NavBar } from './styles/Navbar';
import { FaGithub, FaLinkedinIn, FaBehance } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

function Nav() {
  const links = useRef([
    {
      imageLink: '/images/githublg.png',
      link: 'https://github.com/danishiiqb/',
    },
    {
      imageLink: FaLinkedinIn,
      link: 'https://www.linkedin.com/in/danish-iqbal-429259239/',
    },
    {
      imageLink: FaBehance,
      link: 'https://www.behance.net/danishiqbal10/',
    },
    {
      imageLink: GrMail,
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=danishiq933@gmail.com',
    },
  ]).current;

  return (
    <NavBar>
      <div className='navbar'> </div>
      <h3 className='logo'>Danish Iqbal.</h3>
      <div className='links'>
        {links.map(({ link, imageLink }, idx) => {
          return <Links key={idx} href={link} src={imageLink}></Links>;
        })}
      </div>
    </NavBar>
  );
}

export default Nav;
