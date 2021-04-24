import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
  return (
    <Navbar bg='light' variant='light'>
      <Navbar.Brand>COVID.WATCHER</Navbar.Brand>
      <Nav className='mr-auto'>
        <Nav.Link href='#home'>Daily</Nav.Link>
        <Nav.Link href='#features'>News</Nav.Link>
        <Nav.Link href='#pricing'>About</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
