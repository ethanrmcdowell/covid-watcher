import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import './style.css';

const Header = () => {
  return (
    <Navbar>
      <Navbar.Brand>COVID-19 Statistics</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='justify-content-end'>
        <Navbar.Text>
          <a href='https://github.com/ethanrmcdowell/covid-watcher'>
            <FontAwesomeIcon icon={faGithubSquare} size='2x' />
          </a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

// <Link to='/'>Home</Link>
// <Link to='/search'>Search</Link>
// <Link to='/about'>About</Link>
