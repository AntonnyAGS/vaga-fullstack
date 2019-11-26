const axios = require('axios');
const Pokemon = require('../models/Pokemon');
const path = require('path');
const fs = require('fs');

module.exports = {
  async store(req, res) {
    const { name,
      pokedexNumber,
      generation,
      evolutionStage,
      evolved,
      familyId,
      crossGen,
      type1,
      type2,
      weather1,
      weather2,
      statTotal,
      atk,
      def,
      sta,
      legendary,
      aquireable,
      spawns,
      raidable,
      hatchable,
      shiny,
      nest,
      newPoke,
      notGettable,
      futureEvolve,
      cp40,
      cp39 } = req.body;
    const { filename } = req.file;

    
      const poke = await Pokemon.create({
        name,
        pokedexNumber,
        image: filename,
        generation,
        evolutionStage,
        evolved,
        familyId,
        crossGen,
        type1,
        type2,
        weather1,
        weather2,
        statTotal,
        atk,
        def,
        sta,
        legendary,
        aquireable,
        spawns,
        raidable,
        hatchable,
        shiny,
        nest,
        newPoke,
        notGettable,
        futureEvolve,
        cp40,
        cp39
    });
    return res.status(201).json(poke);
  },
  async index(req, res) {
    const pokes = await Pokemon.find();
    return res.json(pokes);
  },
  async find(req,res){
    try{
      const poke = await Pokemon.findById(req.params.id);
      return res.json(poke);
    }
    catch(e){
      return res.status(404).json({
        message: 'Não foi possível encontrar um Pokemon no id: ' + req.params.id
      })
    }
  },
  async update(req, res) {
    const { filename } = req.file;

    try {
      const poke = await Pokemon.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        pokedexNumber: req.body.pokedexNumber,
        image: filename,
        generation: req.body.generation,
        evolutionStage: req.body.evolutionStage,
        evolved: req.body.evolved,
        familyId: req.body.familyId,
        crossGen: req.body.crossGen,
        type1: req.body.type1,
        type2: req.body.type2,
        weather1: req.body.weather1,
        weather2: req.body.weather2,
        statTotal: req.body.statTotal,
        atk: req.body.atk,
        def: req.body.def,
        sta: req.body.sta,
        legendary: req.body.legendary,
        aquireable: req.body.aquireable,
        spawns: req.body.spawns,
        raidable: req.body.raidable,
        hatchable: req.body.hatchable,
        shiny: req.body.shiny,
        nest: req.body.nest,
        newPoke: req.body.newPoke,
        notGettable: req.body.notGettable,
        futureEvolve: req.body.futureEvolve,
        cp40: req.body.cp40,
        cp39: req.body.cp39
      })
    }
    catch (e) {
      return res.status(404).json({
        message: 'Erro ao atualizar Pokemon com o MongoID: ' + req.params.id
      });
    }
    return res.status(200).send();
  },
  async delete(req, res) {
    try{
      const poke = await Pokemon.findById(req.params.id);
      const filename = poke.image;
      const destination = path.resolve(__dirname, '..', '..', 'uploads/'+filename);
      await fs.unlinkSync(destination);
      await Pokemon.deleteOne(poke);
    }
    catch(e){
      res.status(400).json({
        message: 'Não foi possível deletar Pokemon no id: ' + req.params.id
      })
    }
    return res.status(200).json();
  }
};