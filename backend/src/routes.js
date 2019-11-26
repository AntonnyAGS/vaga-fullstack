const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');


const PokeController = require('./controllers/PokemonController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/pokemon',upload.single('filename'), PokeController.store);
routes.get('/pokemon', PokeController.index);
routes.put('/pokemon/:id',upload.single('filename'), PokeController.update);
routes.delete('/pokemon/:id', PokeController.delete);

module.exports = routes;