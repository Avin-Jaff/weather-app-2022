import React from "react";
import { useEffect, useState } from "react";
import { ListGroup, Image } from "react-bootstrap";
import Navbarcomp from "./Navbarcomp";
const API_KEY = "8c9d65789dd945a38b9123103212112";
export default function About() {
  const [location, setLocation] = useState("Arbil");
  const [weather, setWeather] = useState({});
  
  const updateWeather = async () => {
            const res = await fetch(
                 `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`
               );
           const data = await res.json();
    const newWeather = {
      city: data.location.name,
      country: data.location.country,
      localtime: data.location.localtime,
      icon: data.current.condition.icon,
      temp: data.current.temp_c,
    };
    setWeather(newWeather);
  };

  useEffect(() => {
    updateWeather();
  }, [location]);
  return (
    <div>

      <Navbarcomp />
      <div id="showCityWea">
         
        <div className="city">
      
        <div className='search-area'>
                <label htmlFor="location">
                    Location
                    <select id="location"
                        value={location}
                        onChange={e => {
                            setLocation(e.target.value)
                        }}>
                        <option value="Arbil">Erbil</option>
                        <option value="Kirkuk">Kirkuk</option>
                        <option value="duhok">Duhok</option>
                        <option value="Koya Iraq">Koya</option>
                    </select>
                </label>
            </div>
        </div>
        <div className="showinformation">
          <div className="theContent">
            <h4> City : {weather.city} </h4>

            <h4> Temp : {weather.temp}</h4>
            <h4> Country : {weather.country}</h4>
           <h4> Time : {weather.localtime}</h4> 

            <Image
              src={weather.icon}
              alt="image From Api"
              width={100}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
