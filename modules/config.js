// Cum arată datele unei API meteo?
// Temperatură, umiditate, vânt, descriere...
export const MOCK_DATA = {
  main: {
    temp: 298.15,           // Temperatură în Kelvin
    feels_like: 297.85,
    temp_min: 297.15,
    temp_max: 299.15,
    pressure: 1013,
    humidity: 45
  },
  weather: [
    {
      id: 800,
      main: "Clear",
      description: "cer senin",
      icon: "01d"
    }
  ],
  wind: {
    speed: 3.6,
    deg: 90
  },
  sys: {
    country: "RO",
    sunrise: 1720309200,
    sunset: 1720363200
  },
  name: "Iași",
  dt: 1720344000,
  timezone: 10800,
  cod: 200
};
