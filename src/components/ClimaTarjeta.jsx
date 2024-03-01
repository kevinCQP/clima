import React, { useState } from 'react'
import './estilos/estilosTarjeta.css'
const ClimaTarjeta = ({climatizacion, tempAgain}) => {
    console.log(tempAgain)

    const [esCelsius, setesCelsius] = useState(true)

    const botonMano = () => {
      setesCelsius(!esCelsius)
    }
  return (
    <section className='tarjeta'>
        <h1  className='clima_titulo'>Weather App</h1>
        <h2 className='clima_ciudad'>{climatizacion?.name},
            {climatizacion?.sys.country}</h2>
        <article>
           <figure>
            <img src={`https://openweathermap.org/img/wn/${climatizacion?.weather[0].icon}@2x.png`} alt="weather icon" />
           </figure>
           <div>
            <h3>
            {climatizacion?.weather[0].descripcion}
            </h3>
            <ul>
                <li><span>Wind Speed:</span> <span>
                </span>{climatizacion?.wind.speed}</li>
                <li><span>Clouds:</span> <span>
                </span>{climatizacion?.clouds.all}</li>
                <li><span>Presure:</span> <span>
                </span>{climatizacion?.main.presure}</li>
                <li><span>Humidity:</span> <span>
                </span>{climatizacion?.main.humidity}</li>
            </ul>
           </div>
        </article>
        <div><h3>{esCelsius?
            tempAgain?.celsius + '°C'
            :
            tempAgain?.fahrenheit + '°F'
      }</h3></div>
        <div><button onClick={botonMano}>change to {esCelsius? '°F':'°C'}</button></div>
    </section>
  )
}

export default ClimaTarjeta