import React from 'react';
import { useRef } from 'react';
import Cursor from '../Cursor';
import Hero from './Hero';

function Main() {
  const headerRef = useRef(null);
  return (
    <>
      <Cursor reference={headerRef}></Cursor>
      <Hero ref={headerRef}></Hero>
    </>
  );
}

export default Main;
