import React, { useState, useEffect } from 'react';

const Async3 = () => {
  const [delhiWeather, setDelhiWeather] = useState(null);
  const [mpWeather, setMpWeather] = useState(null);

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const delhiWeatherResponse = await new Promise((resolve) => {
          setTimeout(() => {
            resolve("20 Deg");
          }, 1000);
        });

        const mpWeatherResponse = await new Promise((resolve) => {
          setTimeout(() => {
            resolve("30 Deg");
          }, 8000);
        });

        setDelhiWeather(delhiWeatherResponse);
        setMpWeather(mpWeatherResponse);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

   let q= fetchWeatherData();
   console.log(q)
  }, []);

  return (
    <div>
      <h1>Weather Information</h1>
      <p>Delhi Weather:  {delhiWeather}</p>
      <p>MP Weather: {mpWeather}</p>
   
    </div>
  );
};

export default Async3;
