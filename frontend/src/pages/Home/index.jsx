import { useState, useEffect } from 'react';
import { OutlinedCard } from '../../components/Card';

import './styles.css';

export const Home = () => {
  const [characters, setCharacters] = useState({});

  useEffect(() => {
    fetch('http://localhost:3333/character/1')
      .then((response) => response.json())
      .then((response) => {
        setCharacters(response);
      });
  }, []);

  return (
    <div className="container">
      <p className="title-text">Star Wars Characters</p>
      <div className="card-container">
        {characters.results &&
          characters.results.map((character) => (
            <OutlinedCard character={character} />
          ))}
      </div>
    </div>
  )
}

