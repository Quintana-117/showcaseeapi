import React, { useState, useEffect } from 'react';

const PokemonComponent = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=9');
        const data = await response.json();
        setPokemon(data.results);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  if (loading) return <div style={styles.loading}>Loading...</div>;
  if (error) return <div style={styles.error}>Error: {error.message}</div>;

  return (
    <div style={styles.container}>
      {pokemon.map((poke) => (
        <PokemonCard key={poke.name} name={poke.name} />
      ))}
    </div>
  );
};

const PokemonCard = ({ name }) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      setImage(data.sprites.front_default);
    };

    fetchImage();
  }, [name]);

  return (
    <div style={styles.card}>
      <h3>{name}</h3>
      {image ? <img src={image} alt={name} style={styles.image} /> : <div>No image available</div>}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '20px',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '15px',
    margin: '10px',
    textAlign: 'center',
    background: 'rgba(255, 255, 255, 0.1)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100px',
  },
  loading: {
    textAlign: 'center',
    marginTop: '20px',
  },
  error: {
    textAlign: 'center',
    marginTop: '20px',
    color: 'red',
  },
};

export default PokemonComponent;


