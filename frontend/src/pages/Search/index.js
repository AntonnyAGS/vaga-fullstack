import React, { useState } from 'react';
import Header from '../../components/Header';
import { Container, Row, Col, Image, Button, InputGroup, FormControl } from 'react-bootstrap';


import api from '../../services/api';
import './index.css';
export default function  Search({ history }){
  const [pokes, setPokes] = useState([]);
 
  
  async function handleSubmit(id) {
    history.push(`/detail/${id}`);
  }
  async function handleRequest() {
    let name = document.getElementById('handleTarget').value;
    const response = await api.get(`/pokemon/page/1?limit=12&search=${name}`);
    setPokes(response.data);
}
    return (
      <div>
        <Header />

        <Container className="mt-5 text-center">
        <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-default" >Search</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl type="text"
    onChange={() => handleRequest()}
    id="handleTarget"
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
    />
  </InputGroup>
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
                <h3 className="mt-5">Search your pokemon. C=</h3>
            </Container>
        )}

        </Container>
      </div>
    )
  
}
