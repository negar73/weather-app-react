import React, {useState} from "react";
const SearchBar = ({fetchWeather}) =>{
const [city,setCity]=useState("");

const handleSubmit = (e) =>{
    e.preventDefault();
    if(city.trim()){
        fetchWeather(city)
        setCity('');
    }
}
    return (
       <form className="mt-6 ml-3 flex items-center" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter city name" value={city} onChange={(e) =>
            setCity(e.target.value)}   className= " p-2.5 border border-gray-300 rounded-l-lg outline-none border-r-0"/>
           <button className="bg-blue-500 text-white px-4 py-2.5 border-l-0 rounded-r-lg cursor-pointer hover:bg-blue-600 transition border" type="submit">Search</button>
       </form>
    );
}
export default SearchBar