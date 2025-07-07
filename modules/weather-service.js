// modules/weatherService.js
import { MOCK_DATA } from './config.js';

export const getCurrentWeather = async (city) => {
  try {
    // Simulează delay (~1s)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (!city || typeof city !== 'string') {
      throw new Error('Nume invalid');
    }

    // Clonăm MOCK_DATA și actualizăm numele orașului
    const simulatedResponse = structuredClone(MOCK_DATA);
    simulatedResponse.name = city;

    return simulatedResponse;

  } catch (error) {
    console.error('Eroare la getCurrentWeather:', error);
    throw error;
  }
};

export const getWeatherByCoords = async (lat, lon) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (
      typeof lat !== 'number' ||
      typeof lon !== 'number' ||
      isNaN(lat) ||
      isNaN(lon)
    ) {
      throw new Error('Coordonate invalide');
    }

    const simulatedResponse = structuredClone(MOCK_DATA);
    simulatedResponse.coord = { lat, lon };

    return simulatedResponse;

  } catch (error) {
    console.error('Eroare la getWeatherByCoords:', error);
    throw error;
  }
};

