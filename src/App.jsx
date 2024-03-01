import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import ClimaTarjeta from './components/ClimaTarjeta';

function App() {
  
  const [coords, setCoords] = useState();
  const [weather, setweather] = useState()
  const [temp, settemp] = useState()
    const coordenadas = (position) =>{
     
      const obj = {
        latitud: position.coords.latitude,
        longitud: position.coords.longitude,
      }
      setCoords(obj);
    }
   useEffect(() => {
    if (coords) 
    {
    const APIllave = '74d1f9d554f72cdf13ebdcf020d13abc';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitud}&lon=${coords.longitud}&appid=${APIllave}`;
    axios.get(url)
    .then(response => {
     const temCelsius = {
      celsius: (response.data.main.temp - 273.15).toFixed(2),
      fahrenheit: (((response.data.main.temp - 273.15) *9/5) + 32).toFixed(2),
     }
      settemp(temCelsius);
      console.log(temCelsius)
      setweather(response.data)})

    .catch(error =>  console.log(error))}
   }, [coords])
   
  
  useEffect(() => {
  navigator.geolocation.getCurrentPosition(coordenadas)
  
  }, [])
  
  
  return (
    
      <div  className='app'>
        <ClimaTarjeta
        climatizacion = {weather}
        tempAgain = {temp}/>
      </div>
      
    
  )
}

export default App
