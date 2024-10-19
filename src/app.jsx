import React from 'react';
import WeatherComponent from './WeatherComponent';

const App = () => {
    return (
        <div className="app">
            <header>
                <h1>Explora Nuestras APIs</h1>
                <p>Integraciones sencillas para tus proyectos</p>
            </header>
            <main>
                <WeatherComponent />
                {/* Aquí puedes añadir más componentes de API */}
            </main>
            <footer>
                <p>&copy; 2024 Showcase de APIs</p>
            </footer>
        </div>
    );
};

export default App;
