import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { Container, Row, Col, Image } from 'react-bootstrap';

import api from '../../services/api';
import './index.css';

export default function Detail({ match }) {
  const [poke, setPoke] = useState([]);

  useEffect(() => {
    async function loadPoke() {
      const response = await api.get(`/pokemon/${match.params.id}`);

      setPoke(response.data);
    }

    loadPoke();
  }, [match.params.id]);

  return (
    <div>
      <Header />
      <Container className="mt-5 text-center mainContainer">
        <h3 className="mb-4">{poke.pokedexNumber} - {poke.name}</h3>
        <Container>
          <Row>
            <Col md={4}>
              <Image className="imageDetail" src={poke.image_url} />
            </Col>
            <Col className="text-left" md={8}>
              <Row className="mb-2">
                <Col xs={6} md={3}>
                  <strong>Type1: </strong>
                  {poke.type1}
                </Col>
                 
                <Col xs={6} md={3}>
                <strong>Type2: </strong>
                  {poke.type2}
                </Col >
                <Col xs={6} md={3}>
                <strong>Weather1: </strong>
                  {poke.weather1}
                </Col>
                <Col xs={6} md={3}>
                <strong>Weather2: </strong>
                  {poke.weather2}
                </Col>
      
              </Row>
              <Row className="mb-2">
                <Col xs={6} md={3}>
                  <strong>FamilyId: </strong>
                  {poke.familyId}
                </Col >
                 
                <Col xs={6} md={3}>
                <strong>Stage: </strong>
                  {poke.evolutionStage}
                </Col>
                <Col xs={6} md={3}>
                <strong>Evolved: </strong>
                  
                  {poke.evolved?"true":"false"}
                </Col>
                <Col xs={6} md={3}>
                <strong>Cross: </strong>
                  {poke.crossGen?"true":"false"}
                </Col>
                
      
              </Row>
              <Row className="mb-2">
                <Col xs={6} md={3}>
                  <strong>Atk: </strong>
                  {poke.atk}
                </Col >
                 
                <Col xs={6} md={3}>
                <strong>Def: </strong>
                  {poke.def}
                </Col>
                <Col xs={6} md={3}>
                <strong>Stat: </strong>
                  
                  {poke.statTotal}
                </Col>
                <Col xs={6} md={3}>
                <strong>Legendary: </strong>
                  {poke.legendary?"true":"false"}
                </Col>
                
      
              </Row>
              <Row className="mb-2">
                <Col xs={6} md={3}>
                  <strong>AQ: </strong>
                  {poke.aquireable?"true":"false"}
                </Col >
                <Col xs={6} md={3}>
                <strong>Spawn: </strong>
                {poke.spawns?"true":"false"}
                </Col>
                <Col xs={6} md={3}>
                <strong>Raidable: </strong> 
                {poke.raidable?"true":"false"}
                </Col>
                <Col xs={6} md={3}>
                <strong>Hatch: </strong>
                  {poke.hatchable?"true":"false"}
                </Col> 
              </Row>
              <Row className="mb-2">
                <Col xs={6} md={3}>
                  <strong>Shiny: </strong>
                  {poke.shiny?"true":"false"}
                </Col >
                <Col xs={6} md={3}>
                <strong>Nest: </strong>
                {poke.nest?"true":"false"}
                </Col>
                <Col xs={6} md={3}>
                <strong>New: </strong> 
                {poke.newPoke?"true":"false"}
                </Col>
                <Col xs={6} md={3}>
                <strong>Not Get: </strong>
                  {poke.notGettable?"true":"false"}
                </Col> 
              </Row>
              <Row className="mb-2">
                <Col xs={6} md={3}>
                  <strong>Future: </strong>
                  {poke.futureEvolve?"true":"false"}
                </Col >
                <Col xs={6} md={3}>
                <strong>CP40: </strong>
                {poke.cp40}
                </Col>
                <Col xs={6} md={3}>
                <strong>CP39: </strong> 
                {poke.cp39}
                </Col>
              </Row>
            </Col>
              
          
          </Row>
        </Container>
      </Container>
    </div>
  )

}
