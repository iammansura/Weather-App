import React, { useState } from 'react'
import Weather from './weather'

export default function Searchcity() {
  const [city, setCity] = useState('')
  const [text, setText] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    if (city.length > 0) {
      setText(<Weather city={city} />)
    } else alert(`Enter a city...`)
  }
  function updateCity(event) {
    setCity(event.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Type a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <p>{text}</p>
    </div>
  )
}
