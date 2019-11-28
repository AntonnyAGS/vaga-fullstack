import React, { useState } from 'react';
import Header from '../../components/Header';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import api from '../../services/api';

export default function Create({history}) {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [pokedexNumber, setPokedexNumber] = useState('');
  const [evolutionStage, setEvolutionStage] = useState('');
  const [evolved, setEvolved] = useState(false);
  const [familyId, setFamilyId] = useState('');
  const [crossGen, setCrossGen] = useState(false);
  const [type1, setType1] = useState('');
  const [type2, setType2] = useState('');
  const [weather1, setWeather1] = useState('');
  const [weather2, setWeather2] = useState('');
  const [atk, setAtk] = useState('');
  const [def, setDef] = useState('');
  const [statTotal, setStatTotal] = useState('');
  const [legendary, setLegendary] = useState(false);
  const [aquireable, setAquireable] = useState(false);
  const [spawns, setSpawns] = useState(false);
  const [raidable, setRaidable] = useState(false);
  const [hatchable, setHatchable] = useState('');
  const [shiny, setShiny] = useState(false);
  const [nest, setNest] = useState(false);
  const [newPoke, setNewPoke] = useState(false);
  const [notGettable, setNotGettable] = useState(false);
  const [futureEvolve, setFutureEvolve] = useState(false);
  const [cp40, setCp40] = useState('');
  const [cp39, setCp39] = useState('');

  async function chooseImageName(event) {
   let file = document.getElementById('formGridFile').value;
   document.getElementById('fileLabel').innerHTML= file;
    setImage(event.target.files[0]);

  }
  async function checkedValue(id){
    let value = document.getElementById(id).checked;
    document.getElementById(id).value = value;
    switch (id){
      case 'formGridEvolved':
          setEvolved(value);
          break;
      case 'formGridCrossGen':
          setCrossGen(value);
          break;
      case 'formGridLegendary':
          setLegendary(value);
          break;
      case 'formGridAquireable':
          setAquireable(value);
          break;
      case 'formGridSpawns':
          setSpawns(value);
          break;
      case 'formGridRaidable':
          setRaidable(value);
          break;
      case 'formGridShiny':
          setShiny(value);
          break;
      case 'formGridNest':
          setNest(value);
          break;
      case 'formGridNewPoke':
          setNewPoke(value);
          break;
      case 'formGridNotGettable':
          setNotGettable(value);
          break;
      case 'formGridFutureEvolve':
          setFutureEvolve(value);
          break;
      default:
        break;        
    }
    
  }
  async function handleSubmit(event){
    event.preventDefault();
    const data = new FormData();
    data.append('pokedexNumber', pokedexNumber);
    data.append('name', name);
    data.append('filename', image);
    data.append('evolutionStage', evolutionStage);
    data.append('evolved', evolved);
    data.append('familyId', familyId);
    data.append('crossGen', crossGen);
    data.append('type1', type1);
    data.append('type2', type2);
    data.append('weather1', weather1);
    data.append('weather2', weather2);
    data.append('atk', atk);
    data.append('def', def);
    data.append('statTotal', statTotal);
    data.append('legendary', legendary);
    data.append('aquireable', aquireable);
    data.append('spawns', spawns);
    data.append('raidable', raidable);
    data.append('hatchable', hatchable);
    data.append('shiny', shiny);
    data.append('nest', nest);
    data.append('newPoke', newPoke);
    data.append('notGettable', notGettable);
    data.append('futureEvolve', futureEvolve);
    data.append('cp40', cp40);
    data.append('cp39', cp39);


    await api.post('/pokemon', data);
    history.push(`/`);
  }
  return (
    
    <div>
      <Header />
      <Container>
        <h1 className="mt-3 text-center">Create new Pokemon</h1>
        <Form encType="multipart/form-data" onSubmit={handleSubmit} className="mt-4">
          <Row>
            <Form.Group as={Col} sm={12} md={4} controlId="formGridIndex">
              <Form.Label>Pokedex Number</Form.Label>
              <Form.Control type="number" value={pokedexNumber} required onChange={event => setPokedexNumber(event.target.value)} placeholder="Pokedex index" />
            </Form.Group>
            <Form.Group as={Col} sm={12} md={8} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control value={name} required onChange={event => setName(event.target.value)} placeholder="Pokemon's name" />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} sm={12} md={4}  controlId="formGridFile">
            <Form.Label>Pokemon's image</Form.Label>
              <div className="input-group-prepend">
              </div>
              <div className="custom-file">
                <Form.Control required className="custom-file-input" onChange={event => chooseImageName(event)}  type="file" placeholder="Pokemon's image" />
                <label className="custom-file-label" id="fileLabel" htmlFor="formGridFile">
                  Choose
                </label>
              </div>
            </Form.Group>
            <Form.Group as={Col} sm={12} md={2} controlId="formGridEvolution">
              <Form.Label>Evolution stage</Form.Label>
              <Form.Control value={evolutionStage} onChange={event => setEvolutionStage(event.target.value)} type="number" placeholder="Pokemon's evolution stage" />
            </Form.Group>
            <Form.Group as={Col} sm={12} md={2} controlId="formGridEvolved">
              <Form.Label>Evolved</Form.Label>
              <Form.Check value={evolved} onChange={event => checkedValue("formGridEvolved")} type="checkbox"  label="Check me out" />
            </Form.Group>
            <Form.Group as={Col} sm={12} md={2} controlId="formGridFamilyId">
              <Form.Label>Family id</Form.Label>
              <Form.Control value={familyId} onChange={event => setFamilyId(event.target.value)} type="number" placeholder="Pokemon's family id" />
            </Form.Group>
            <Form.Group as={Col} sm={12} md={2} controlId="formGridCrossGen">
              <Form.Label>Cross gen</Form.Label>
              <Form.Check value={crossGen} onChange={event => checkedValue("formGridCrossGen")} type="checkbox"  label="Check me out" />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} sm={12} md={3} controlId="formGridType1">
              <Form.Label>Tipo1:</Form.Label>
              <Form.Control  value={type1} required onChange={event => setType1(event.target.value)} placeholder="Pokemon's type 1" />
            </Form.Group>
            <Form.Group as={Col} sm={12} md={3} controlId="formGridType2">
              <Form.Label>Tipo2:</Form.Label>
              <Form.Control  value={type2} onChange={event => setType2(event.target.value)} placeholder="Pokemon's type 2" />
            </Form.Group>
            <Form.Group as={Col} sm={12} md={3} controlId="formGridWeather1">
              <Form.Label>Clima1:</Form.Label>
              <Form.Control  value={weather1} onChange={event => setWeather1(event.target.value)} placeholder="Pokemon's weather 1" />
            </Form.Group>
            <Form.Group as={Col} sm={12} md={3} controlId="formGridWeather2">
              <Form.Label>Clima2:</Form.Label>
              <Form.Control  value={weather2} onChange={event => setWeather2(event.target.value)} placeholder="Pokemon's weather 2" />
            </Form.Group>  
          </Row>
          <Row>
          <Form.Group as={Col} sm={12} md={3} controlId="formGridAtk">
              <Form.Label>Atk:</Form.Label>
              <Form.Control  type="number" value={atk} onChange={event => setAtk(event.target.value)} placeholder="Pokemon's atk" />
            </Form.Group>
            <Form.Group as={Col} sm={12} md={3} controlId="formGridWeather2">
              <Form.Label>Def:</Form.Label>
              <Form.Control  type="number" value={def} onChange={event => setDef(event.target.value)} placeholder="Pokemon's def" />
            </Form.Group>  
            <Form.Group as={Col} sm={12} md={6} controlId="formGridStatTotal">
              <Form.Label>Stat Total:</Form.Label>
              <Form.Control  type="number" value={statTotal} onChange={event => setStatTotal(event.target.value)} placeholder="Pokemon's stat total" />
            </Form.Group> 
          </Row>
          <Row>
          <Form.Group as={Col} sm={12} md={3} controlId="formGridLegendary">
              <Form.Label>Legendary</Form.Label>
              <Form.Check value={legendary} onChange={event => checkedValue("formGridLegendary")} type="checkbox"  label="Check me out" />
            </Form.Group>
            <Form.Group as={Col} sm={12} md={3} controlId="formGridAquireable">
              <Form.Label>Aquireable</Form.Label>
              <Form.Check value={aquireable} onChange={event => checkedValue("formGridAquireable")} type="checkbox"  label="Check me out" />
            </Form.Group>
            <Form.Group as={Col} sm={12} md={3} controlId="formGridSpawns">
              <Form.Label>Spawns</Form.Label>
              <Form.Check value={spawns} onChange={event => checkedValue("formGridSpawns")} type="checkbox"  label="Check me out" />
            </Form.Group>
            <Form.Group as={Col} sm={12} md={3} controlId="formGridRaidable">
              <Form.Label>Raidable</Form.Label>
              <Form.Check value={raidable} onChange={event => checkedValue("formGridRaidable")} type="checkbox"  label="Check me out" />
            </Form.Group>
          </Row>
          <Row>
          <Form.Group as={Col} sm={12} md={3} controlId="formGridHatchable">
              <Form.Label>Hatchable</Form.Label>
              <Form.Control type="number" value={hatchable} onChange={event => setHatchable(event.target.value)} placeholder="Hatchable" />
            </Form.Group>
            <Form.Group as={Col} sm={12} md={3} controlId="formGridShiny">
              <Form.Label>Shiny</Form.Label>
              <Form.Check value={shiny} onChange={event => checkedValue("formGridShiny")} type="checkbox"  label="Check me out" />
            </Form.Group>
            <Form.Group as={Col} sm={12} md={3} controlId="formGridNest">
              <Form.Label>Nest</Form.Label>
              <Form.Check value={nest} onChange={event => checkedValue("formGridNest")} type="checkbox"  label="Check me out" />
            </Form.Group>
            <Form.Group as={Col} sm={12} md={3} controlId="formGridNewPoke">
              <Form.Label>New Poke:</Form.Label>
              <Form.Check value={newPoke} onChange={event => checkedValue("formGridNewPoke")} type="checkbox"  label="Check me out" />
            </Form.Group>
          </Row>
          <Row>
          <Form.Group as={Col} sm={12} md={3} controlId="formGridNotGettable">
              <Form.Label>Not Gettable:</Form.Label>
              <Form.Check value={notGettable} onChange={event => checkedValue("formGridNotGettable")} type="checkbox"  label="Check me out" />
            </Form.Group>
            <Form.Group as={Col} sm={12} md={3} controlId="formGridFutureEvolve">
              <Form.Label>Future Evolve:</Form.Label>
              <Form.Check value={futureEvolve} onChange={event => checkedValue("formGridFutureEvolve")} type="checkbox"  label="Check me out" />
            </Form.Group>
          <Form.Group as={Col} sm={12} md={3} controlId="formGridCp40">
              <Form.Label>CP 40:</Form.Label>
              <Form.Control type="number" value={cp40} onChange={event => setCp40(event.target.value)} placeholder="Cp 40" />
            </Form.Group>
            <Form.Group as={Col} sm={12} md={3} controlId="formGridCp39">
              <Form.Label>CP 39:</Form.Label>
              <Form.Control type="number" value={cp39} onChange={event => setCp39(event.target.value)} placeholder="Cp 39" />
            </Form.Group>
            
          </Row>
          <Row className="mt-3 mb-3">
            <Form.Group as={Col} sm={12} controlId="formGridButton"> 
            <Button variant="primary" type="submit" size="lg" block>
              Enviar
            </Button>
            </Form.Group>
          </Row>
        </Form>
      </Container>
    </div>
  )

}
