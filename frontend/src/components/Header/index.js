import React from 'react';
import { Nav, Image, Container } from 'react-bootstrap';
import Logo from '../../assets/pokemon.webp';
import './index.css';
import { Link } from 'react-router-dom';

export default function Header() {

  return (


    <div>
      <Container className="text-center">
        <Image className="mt-2 imglogo" src={Logo} fluid />
      </Container>


      <Nav className="justify-content-center mt-5" activeKey="/home">
        <Nav.Item>
          <Nav.Link as={Link} to='/' >All Pokemon's</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to='/create' eventKey="link-1">Create Pokemon</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to='/search' eventKey="link-1">Search Pokemon's</Nav.Link>
        </Nav.Item>
      </Nav>

    </div>
  );
}