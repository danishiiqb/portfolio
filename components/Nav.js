import Image from 'next/image';
import React from 'react';
import { useRef } from 'react';
import Links from './Links';
import { NavBar } from './styles/Navbar';

function Nav() {
  const links = useRef([
    {
      imageLink: '/images/githublg.png',
      link: 'https://github.com/danishiiqb/',
      dimensions: {
        width: 25,
        height: 25,
      },
    },
    {
      imageLink: '/images/linkedin.png',
      link: '/',
      dimensions: {
        width: 24,
        height: 24,
      },
    },
    {
      imageLink: '/images/behance.png',
      link: 'https://www.behance.net/danishiqbal10/',
      dimensions: {
        width: 30,
        height: 30,
      },
    },
    {
      imageLink: '/images/email.png',
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=danishiq933@gmail.com',
      dimensions: {
        width: 30,
        height: 30,
      },
    },
  ]).current;

  return (
    <NavBar>
      <h3>Danish Iqbal.</h3>
      <div>
        {links.map(({ link, imageLink, dimensions }, idx) => {
          return (
            <Links
              key={idx}
              dimensions={dimensions}
              href={link}
              src={imageLink}
            ></Links>
          );
        })}
      </div>
    </NavBar>
  );
}

export default Nav;
