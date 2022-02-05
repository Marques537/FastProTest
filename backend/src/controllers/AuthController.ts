import { Request, Response, NextFunction, response } from 'express';
const jwt = require('jsonwebtoken');

const SECRET = 'matheusmarques';

class Authenticate{
  static getJWT(userID: any){
    const token = jwt.sign({ userID }, SECRET, { expiresIn: 3033333333330 });
    return token;

  }
  static ensureAuthenticated = (request: Request, respose: Response, next: NextFunction) =>{
    const token = request.headers['x-access-token'];
    jwt.verify(token, SECRET, (err:any, decoded: any) =>{
      if( err ) return response.status(401).end();

      next();
    }); 
  }
}

export default Authenticate;