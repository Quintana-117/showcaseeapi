import React, { useEffect } from 'react';

const MapsComponent = () => {
    useEffect(() => {
    const initMap = () => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
        });
    };

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=TU_API_KEY&callback=initMap`;
    script.async = true;
    document.body.appendChild(script);
    }, []);

    return <div id="map" style={{ height: '400px', width: '100%' }} />;
};

export default MapsComponent;
