import { useState, useEffect, useContext } from 'react'
import { OutlinedCard } from '../../components/Card';
import { getCharacters } from '../../services/api';
import StoreContext  from '../../components/Store/Context'
import { Navigate } from 'react-router-dom';

import './styles.css';

export const Home = () => {
  const [characters, setCharacters] = useState({});
  const { token, setToken } = useContext(StoreContext);

  function onClick(event){
    event.preventDefault();
    setToken('');
    <Navigate to="/login" />
  }

  const getAuthRoute = async (token) => {
    const response = await getCharacters(token);
    setCharacters(response.data);
    return response;
  }  
  
  useEffect(() => {
    getAuthRoute(token);
  }, [token]);

  return (
    <div className="container">
      <p className="title-text">Star Wars Characters</p>
      <div className="card-container">
        {characters.results &&
          characters.results.map((character) => (
            <OutlinedCard character={character} />
          ))}
      </div>
      <button className="btn-logout"onClick={onClick}>Logout</button>
    </div>
  )
}

