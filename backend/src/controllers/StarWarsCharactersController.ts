import { Request, Response } from 'express';
import SwapiService from '../service/swapiService';

class StarWarsCharactersController{
  async GetCharacters(request: Request, response: Response){
    const { page } = request.params;
    const apiResponse = await SwapiService.getByPage(Number(page));
    return response.status(200).json(apiResponse.data);
  }
 
}
export default StarWarsCharactersController;