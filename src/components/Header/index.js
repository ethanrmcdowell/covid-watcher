import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
  return (
    <Navbar bg='light' variant='light'>
      <Navbar.Brand>COVID.WATCHER</Navbar.Brand>
      <Nav className='mr-auto'>
        <Nav.Link href='/'>Home</Nav.Link>
        <Nav.Link href='/search'>Search</Nav.Link>
        <Nav.Link href='/about'>About</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;

// <Link to='/'>Home</Link>
// <Link to='/search'>Search</Link>
// <Link to='/about'>About</Link>
