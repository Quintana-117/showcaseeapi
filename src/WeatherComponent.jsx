import React, { useEffect, useState } from 'react';

const WeatherComponent = () => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  const apiKey = 'bd00b4e44412e0e6f96f5d44e141207a';

    useEffect(() => {
    const fetchWeather = async () => {
        try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error('Error en la respuesta de la API');
        }
        const data = await response.json();
        setWeather(data);
        } catch (err) {
        setError(err.message);
        } finally {
        setLoading(false);
        }
    };

    fetchWeather();
    }, [apiKey]);

    if (loading) return <p>Cargando clima...</p>;
    if (error) return <p>Error: {error}</p>;

    if (!weather || !weather.main) return <p>No se pudo obtener el clima.</p>;

    return (
    <div>
        <h2>Clima en {weather.name}</h2>
        <p>Temperatura: {weather.main.temp} °C</p>
        <p>Descripción: {weather.weather[0].description}</p>
    </div>
    );
};

export default WeatherComponent;

