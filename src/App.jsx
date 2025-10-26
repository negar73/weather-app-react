import { useState } from 'react'
import axios from "axios";
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard';

function App() {
const [weather,setWeather] = useState(null);
const [loading,setLoading]=useState(false);
const [error,setErorr] = useState("");

const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`; 

const fetchWeather = async (city) => {
  setLoading(true);
  setErorr('');
  try {
    const url = `${API_URL}?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;

  // const url = `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`;

    const response = await axios.get(url);
    console.log(response.data);
    setWeather(response.data);
  } catch (err){
    if (err.response && err.response.status ===404){
      setErorr('city not found. Please try again')
    } else{
      setErorr("An error occured. Please try again later.")

    }
    setWeather(null);
  } finally {
      setLoading(false);
    }

}

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-blue-100 '>

<div className='bg-black/90 text-white rounded-lg shadow-lg p-8 max-w-md'>
  <h1 className='text-3xl font-bold 
  text-center nb-6'>weather-app</h1>
  <SearchBar fetchWeather={fetchWeather}/>
{loading && <p className='text-center mt-4'>loading...</p>}
{error && <p className='text-red-500 text-center mt-4'>{error}</p>}
{weather && <WeatherCard weather={weather} />}
</div>
    </div>
  );
};

export default App
