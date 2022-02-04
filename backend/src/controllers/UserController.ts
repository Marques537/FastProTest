import { Request, Response } from 'express';
import knex from '../database/connection';

class UserController{
  async create(request: Request, response: Response){
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
  
      return response.json({
        user_id: insertedId[0]
      });
    } catch (error: any) {
      console.log(error);
      if (error.code == 'SQLITE_CONSTRAINT'){
        return response.json({message: 'e-mail já utilizado'})
      }
      return response.json(error);
    }
  }
  async login(request: Request, response: Response){
    request.headers['Authorization']
  }
}

export default UserController;