import React from 'react';
import { useRef } from 'react';
import { FooterElem } from './styles/Footer';

function Footer() {
  const { current: links } = useRef([
    { name: 'Instagram', link: 'https://www.instagram.com/danishiqq/' },
    { name: 'Github', link: 'https://www.instagram.com/danishiqq/' },
    { name: 'Behance', link: 'https://www.instagram.com/danishiqq/' },
    { name: 'Linkedin', link: 'https://www.instagram.com/danishiqq/' },
    { name: 'Twitter', link: 'https://www.instagram.com/danishiqq/' },
  ]);
  return (
    <FooterElem>
      <div> &#169; Designed and Developed by Danish Iqbal.</div>
      <div className='list'>
        {links.map((item, idx) => {
          return (
            <div key={idx}>
              <a href={item.link} rel='noopener' target='_blank'>
                {item.name}
              </a>
            </div>
          );
        })}
      </div>
    </FooterElem>
  );
}

export default Footer;
