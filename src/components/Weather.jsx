import React, { useState} from 'react'
import { Clock } from './Clock'
import '../global.css'

const api = {
    key: 'eab4a93cd7ffb5e0e25164a422348d45',
    base: "https://api.openweathermap.org/data/2.5/" 
}

export const Weather = () => {
 const [query, setQuery] = useState('')
 const [weather, setWeather] = useState({})

 const search = evt => {
    if (evt.key === "Enter") {
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
            setWeather(result)
            setQuery('')
            console.log(result);
        })
    }
 }

    const dateBuilder = (d) => {
        let date = String(new window.Date())
        date = date.slice(3,15)
        return `${date}`
    }
  return (
    <div className={
        (typeof weather.main != "undefined") 
        ? ((weather.main.temp > 20) 
        ? 'weather-app warm' 
        : 'weather-app') 
        : 'weather-app'
        }>
        <main>
            <div className="search-box">
                <input 
                type="text"
                className='search-bar'
                placeholder='Search Any Location...'  
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyDown={search}
                />
            </div>
            {(typeof weather.main != 'undefined') ? (
            <div>
             <div className="location-box">
                <div className="location">{weather.name}, {weather.sys.country}</div>
                <div className="date">{dateBuilder(new Date())}</div>
             </div>
             <div className="weather-box">
                  <div className="temp">
                    {Math.round(weather.main.temp)}°c
                  </div>
                <div className='weather'>{weather.weather[0].main}</div>
                  <div className="time">
                      <Clock />
                  </div>
             </div>
            </div>
            ) : ('')}
        </main>
    </div>
  )
}
