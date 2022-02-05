import express from 'express';
import UserController from './controllers/UserController';
import StarWarsCharactersController from './controllers/StarWarsCharactersController';

const routes = express.Router();
const userController = new UserController();
const starWarsControlller = new StarWarsCharactersController();


routes.post('/cadastro', userController.create);
routes.get('/character/:page', starWarsControlller.GetCharacters);

export default routes;