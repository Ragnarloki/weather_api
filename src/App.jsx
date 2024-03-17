import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');

  const API_KEY = 'f67d7494d305673cbe6ed85f6237ab5c';
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

  const fetchWeather = async () => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric', // or 'imperial' for Fahrenheit
        },
      });
      console.log(response.data)
      setWeatherData(response.data);
      
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
  <div className='fuck'>
    <div className='center'>
      <input 
        className='input'
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        width={200}
      />
      <Button onClick={fetchWeather}  >Get Weather </Button>
      {weatherData && (
        <div className='container'>
        <div className='row'>
          <div className='col'>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>windSpeed: {weatherData.wind.speed}</p>
        </div>
            <div className="col ">
            <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="img"/>
                    
           </div>
        </div>
       </div>
      )}
    </div>
    </div>
      );
};

export default Weather;
