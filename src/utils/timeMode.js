export const getTimeMode = () => {
    const hour = new Date().getHours();
    // const isDay = hour >= 6 && hour < 18;
    // dawn for day, dusk for night
    const isDay = true;

    return {
        mode: isDay ? 'day' : 'night',
        style: 'mapbox://styles/mapbox/standard',
        pinColor: isDay ? '#ef4444' : '#C0C0C0', // Red vs Silver
    };
};
