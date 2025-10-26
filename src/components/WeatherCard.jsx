import React from 'react';

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  const iconCode = weather.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className='mt-6 bg-white/10 p-6 rounded-2xl text-center shadow-md backdrop-blur-sm'>
      {/* شهر و کشور */}
      <h2 className='text-2xl font-semibold mb-2'>
        {weather.name}, <span className='text-gray-300 text-lg'>{weather.sys.country}</span>
      </h2>

      {/* آیکون و توضیح وضعیت */}
      <div className='flex flex-col items-center justify-center'>
        <img src={iconUrl} alt={weather.weather[0].description} className='w-20 h-20' />
        <p className='capitalize text-lg mt-1'>{weather.weather[0].description}</p>
      </div>

      {/* دما و جزئیات دیگر */}
      <p className='text-5xl font-bold mt-3'>
        {Math.round(weather.main.temp)}°C
      </p>

      <div className='mt-4 grid grid-cols-2 gap-3 text-sm text-gray-200'>
        <div className='bg-white/5 rounded-lg p-2'>
          <p className='font-semibold'>Humidity</p>
          <p>{weather.main.humidity}%</p>
        </div>
        <div className='bg-white/5 rounded-lg p-2'>
          <p className='font-semibold'>Wind</p>
          <p>{weather.wind.speed} m/s</p>
        </div>
        <div className='bg-white/5 rounded-lg p-2'>
          <p className='font-semibold'>Feels Like</p>
          <p>{Math.round(weather.main.feels_like)}°C</p>
        </div>
        <div className='bg-white/5 rounded-lg p-2'>
          <p className='font-semibold'>Pressure</p>
          <p>{weather.main.pressure} hPa</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
