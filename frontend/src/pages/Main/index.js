import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';


import api from '../../services/api';
import './index.css';
export default function  Main({ history }){
  const [pokes, setPokes] = useState([]);
 
  useEffect(() => {
    async function loadPokes() {
      const response = await api.get('/pokemon');

      setPokes(response.data);
    }
    loadPokes();
  }, []);
  async function handleSubmit(id) {
    history.push(`/detail/${id}`);
  }


    return (
      <div>
        <Header />
        <Container className="mt-5 text-center">
        {pokes.length > 0 ? (
        <Row>
          {pokes.map(poke => (
            <Col sm={12} md={4} key={poke._id}>
            <Container className="pokeCard mb-5">
              <Image src={poke.image_url} thumbnail />
              <strong>{poke.name}</strong>
              {poke.type1}
              <footer>
                
              <Button onClick={() => handleSubmit(poke._id)} className="mt-3" variant="primary">Visualizar</Button>
              </footer>
            </Container>
            </Col>
            ))}
          </Row>
        ):(
            <Container >
                <h3 className="mt-5">We don't have pokemons. =C</h3>
            </Container>
        )}
        </Container>
      </div>
    )
  
}
