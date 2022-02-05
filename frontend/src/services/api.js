import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333'
});

export const createSession = async (email, password) => {
  return await api.post('/login', email, password)
}

export const getCharacters = async (token) =>{
  const headers = {
    'x-access-token': token
  };
  return await api.get('/character/1', { headers });
}

export const postUser = async (name, email, phoneNumber, password) => {
  return await api.post('/cadastro', name, email, phoneNumber, password);
}