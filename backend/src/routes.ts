import express, { Request, Response, NextFunction } from 'express';
import UserController from './controllers/UserController';
import StarWarsCharactersController from './controllers/StarWarsCharactersController';

const routes = express.Router();
const userController = new UserController();
const starWarsControlller = new StarWarsCharactersController();

const ensureAuthenticated = (request: Request, respose: Response, next: NextFunction) =>{
  const authHeader = request.headers.authorization;

}

routes.post('/cadastro', userController.create);

routes.get('/character/:page', ensureAuthenticated, starWarsControlller.GetCharacters);
// routes.post('/auth', controller.post)

export default routes;