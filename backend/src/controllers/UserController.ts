import { Request, Response } from 'express';
import knex from '../database/connection';
import Authenticate from './AuthController';
class UserController {
  async create(request: Request, response: Response) {
    const {
      name,
      phoneNumber,
      email,
      password,
    } = request.body;

    try {
      const insertedId = await knex('user').insert({
        name,
        phoneNumber,
        email,
        password,
      });

      return response.status(200).json({
        user_id: insertedId[0]
      });
    } catch (error: any) {
      console.log(error);
      if (error.code == 'SQLITE_CONSTRAINT') {
        return response.json({ message: 'e-mail já utilizado' })
      }
      return response.json(error);
    }
  }
  async login(request: Request, response: Response) {

    const { email, password } = request.body
    const userId = await knex.select('id')
    .from<Object>('user')
    .where('email', email)
    .where('password', password);
    console.log(userId.length)
    console.log(typeof userId)
    

    if (userId.length > 0) {
      const token = Authenticate.getJWT(userId);
      return response.status(200).json({ auth: true, token });
    }else{
      return response.status(401).end();
    }
  }
}

export default UserController;