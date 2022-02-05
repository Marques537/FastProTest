import express from 'express';
import UserController from './controllers/UserController';
import StarWarsCharactersController from './controllers/StarWarsCharactersController';
import Authenticate from './controllers/AuthController';

const routes = express.Router();
const userController = new UserController();
const starWarsControlller = new StarWarsCharactersController();

routes.post('/cadastro', userController.create);

routes.get('/character/:page', Authenticate.ensureAuthenticated, starWarsControlller.GetCharacters);
routes.post('/login', userController.login)


export default routes;