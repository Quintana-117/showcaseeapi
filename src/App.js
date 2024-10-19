
// App.jsx
import React from 'react';
import MapsComponent from './MapsComponent';
import PokemonComponent from './PokemonComponent';
import WeatherComponent from './WeatherComponent';

const App = () => {
  return (
    <div>
      <h1>OYE TU, que buenos pokemones</h1>
      <PokemonComponent />
      <WeatherComponent />
      <MapsComponent />
    </div>
  );
};




export default App;
