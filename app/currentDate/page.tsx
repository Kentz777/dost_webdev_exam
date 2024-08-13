'use client';

import React, { useState } from 'react';

const DateAndWeather: React.FC = () => {
  const [date, setDate] = useState<string>(new Date().toLocaleDateString());
  const [city, setCity] = useState<string>('');
  const [weather, setWeather] = useState<string>('');
  const [cityName, setCityName] = useState<string>('');
  const [timezone, setTimezone] = useState<string>('');
  const [latitude, setLatitude] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [state, setState] = useState<string>('');

  const handleSearch = async () => {
    const apiKey = 'b20fd2c394d049d69bbdcea3c26f78a6';
    const url = `https://api.weatherbit.io/v2.0/forecast/hourly?city=${city}&key=${apiKey}&hours=48`;

    const response = await fetch(url);
    const data = await response.json();

    if (data && data.data && data.data.length > 0) {
      const firstHourData = data.data[0];
      setWeather(`Temperature: ${firstHourData.temp}°C, Weather: ${firstHourData.weather.description}`);
      setCityName(data.city_name);
      setTimezone(data.timezone);
      setLatitude(data.lat);
      setCountry(data.country_code);
      setState(data.state_code);
    } else {
      setWeather('Weather data not found');
      setCityName('');
      setTimezone('');
      setLatitude('');
      setCountry('');
      setState('');
    }
  };

  return (
    <div className="bg-cover bg-gradient-to-r from-blue-500 to-blue-300 min-h-screen p-4">
      <div className="bg-black bg-opacity-70 p-8 rounded-xl shadow-2xl text-blue-100 max-w-4xl mx-auto">
        <h1 className='text-4xl font-bold mb-6 text-blue-300'>Date and Weather</h1>
        <p className='text-2xl mb-6 text-blue-200'>{date}</p>
        <div className='mb-6 space-y-4'>
          <input
            type='text'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder='Enter city'
            className='p-2 w-full bg-blue-900 bg-opacity-50 border border-blue-400 rounded text-blue-100 placeholder-blue-300'
          />
          <button
            onClick={handleSearch}
            className='bg-blue-600 hover:bg-blue-700 text-white p-2 rounded w-full transition duration-300'
          >
            Search Weather
          </button>
        </div>
        {weather && cityName && (
          <div className='mt-6 bg-blue-900 bg-opacity-50 p-4 rounded'>
            <h2 className='text-2xl font-bold mb-2 text-blue-300'>Weather in {cityName}</h2>
            <p className='text-lg mb-2'>{weather}</p>
            <p className='text-lg mb-2'>Timezone: {timezone}</p>
            <p className='text-lg mb-2'>Latitude: {latitude}</p>
            <p className='text-lg'>State: {state}, Country: {country}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DateAndWeather;