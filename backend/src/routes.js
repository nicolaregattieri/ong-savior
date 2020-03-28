const express = require('express');

const OngCongtroller = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

//APENAS TESTE PARA LISTA COM SUCESSO
routes.get('/ongs', OngCongtroller.index);
// CADASTRO DE ONG NO BANCO
routes.post('/ongs', OngCongtroller.create);

//APENAS TESTE PARA LISTA COM SUCESSO
routes.get('/incidents', IncidentController.index);
// CADASTRO DE CASO NO BANCO
routes.post('/incidents', IncidentController.create);
// DELETA CASOS DO BANCO
routes.delete('/incidents/:id', IncidentController.delete);

// RECUPERA CASOS DE UMA ONG
routes.get('/profile', ProfileController.index);

module.exports = routes;
