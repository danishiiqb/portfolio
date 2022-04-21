import React from 'react';
import Nav from './Nav';
import { Container } from './styles/Container.styled';

function Layout({ children }) {
  return (
    <>
      <Container>
        <Nav></Nav>
        {children}
      </Container>
    </>
  );
}

export default Layout;
