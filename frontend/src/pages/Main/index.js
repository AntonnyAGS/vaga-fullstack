import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { Container, Row, Col, Image } from 'react-bootstrap';

import api from '../../services/api';
import './index.css';
export default function  Main(){
  const [pokes, setPokes] = useState([]);
 
  useEffect(() => {
    async function loadPokes() {
      const response = await api.get('/pokemon');

      setPokes(response.data);
    }
    loadPokes();
  }, []);

    return (
      <div>
        <Header />
        <Container className="mt-5 text-center">
        <Row>
          {pokes.map(poke => (
            <Col sm={12} md={4} key={poke._id}>
            <Container className="pokeCard mb-5">
              <Image src={poke.image_url} thumbnail />
              <strong>{poke.name}</strong>
            </Container>
            </Col>
            ))}
          </Row>
        </Container>
      </div>
    )
  
}
