// Utility functions for map interactions
// Currently logic is handled directly in MapExperience.jsx component
// This file is reserved for future complex calculations (e.g. bearing/pitch transitions)

export const calculateCameraPosition = (city) => {
    return {
        center: [city.lng, city.lat],
        zoom: 11,
        pitch: 60,
        bearing: 0
    };
};
