import React, { useEffect, useState ,useRef } from "react";
import "./Weather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import image from "../assets/image.png";
import humidity from "../assets/humidity.png";
import wind from "../assets/wind.png"

function Weather() {
  const inputref=useRef()
const[weatherdata,setweatherData]=useState(false);

  const search = async (city) => {
    if(city===""){
      alert("Enter City Name");
      return;
    }
    try {
      const apiKey = import.meta.env.VITE_APP_ID; // Ensure this is correctly set in your environment variables
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
      
      const response = await fetch(url);
      if(!response.ok){
        alert("enter the correct city");
        return;
      }
      
      const data = await response.json();
      
      console.log(data);

     
      setweatherData({
        humidity:data.main.humidity,
        windSpeed:data.wind.speed,
        temprature:Math.floor(data.main.temp),
        location:data.name,
        // icon:
      })
    } catch (error) {
      setweatherData(false);
      console.error("Error fetching weather data:", error);
    }
  };
  useEffect(()=>{
    search("nashik")
  },[])
  return (
    <div className="weather">
      <div className="search-bar">
        <input  ref={inputref} type="text" placeholder="Search" />
        <FontAwesomeIcon icon={faSearch} className="searchicon" onClick={()=>search(inputref.current.value)} />
      </div>
      {weatherdata?<>
        <img src={image} alt="img" className="weathericon" />
      <p className="temp">{weatherdata.temprature}°c</p>
      <p className="location">{weatherdata.location}</p>
   
      <div className="weather-data">
        <div className="col">
          <img src={humidity} alt="" className="humidity" />
          <div>
            <p>{weatherdata.humidity}</p>
            <span>Humidity</span>
          </div>
        </div>

        <div className="col">
          <img src={wind} alt="" className="humidity"/>
          <div>
            <p>{weatherdata.windSpeed}</p>
            <span>Wind Speed</span>
          </div>
        </div>

      </div>
      
      </>:<></>}
      
    </div>
  );
}

export default Weather;
