import axios from 'axios';

class SwapiService{
  static async getByPage(page: number){
    return await axios.get(`https://swapi.dev/api/people/?page=${page}`);
  }
}

export default SwapiService;