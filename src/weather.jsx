import React, { useState } from 'react'
import axios from 'axios'

export default function Weather(props) {
  const [temp, setTemp] = useState(null)
  const [feels, setFeels] = useState(null)
  const [description, setDescription] = useState(null)
  const [humidity, setHumidity] = useState(null)
  const [wind, setWind] = useState(null)
  const [icon, setIcon] = useState(null)

  function showTemp(response) {
    console.log(response.data)
    setTemp(response.data.main.temp)
    setFeels(response.data.main.feels_like)
    setDescription(response.data.weather[0].description)
    setHumidity(response.data.main.humidity)
    setWind(response.data.wind.speed)
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    )
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=857fbe973ad9987d54d0a62fd2b80055&units=metric`
  axios.get(url).then(showTemp)

  return (
    <ul className="lists">
      <br />
      <li className="city">{props.city}</li>
      <li>Temperature : {Math.round(temp)}°C</li>

      <li>Description : {description}</li>
      <li>Humidity : {humidity}%</li>
      <li>Wind : {Math.round(wind)} km/h</li>
      <li>
        {' '}
        <img src={icon} alt="Weather icons" />{' '}
      </li>
      <li>Feels-like : {Math.round(feels)}°C</li>
    </ul>
  )
}
