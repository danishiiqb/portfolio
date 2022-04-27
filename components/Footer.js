import React from 'react';
import { useRef } from 'react';
import { FooterElem } from './styles/Footer';

function Footer() {
  const { current: links } = useRef([
    { name: 'Instagram', link: 'https://www.instagram.com/danishiqq/' },
    { name: 'Github', link: 'https://github.com/danishiiqb/' },
    { name: 'Behance', link: 'https://www.behance.net/danishiqbal10/' },
    {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/danish-iqbal-429259239/',
    },
    { name: 'Twitter', link: 'https://twitter.com/iq_danish' },
  ]);
  return (
    <FooterElem>
      <div> &#169; Designed and Developed by Danish Iqbal.</div>
      <div className='list'>
        {links.map((item, idx) => {
          return (
            <div key={idx}>
              <a href={item.link} rel='noreferrer' target='_blank'>
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
