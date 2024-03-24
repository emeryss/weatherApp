import React from 'react'

const WeatherBox = ({weather}) => {
    console.log("weather?", weather)
    // let tt = weather?.main.temp
    // console.log("temp num", tt)
    // let celsius = tt.toFixed(1)
    // let faren = celsius *1.8+32
    return (
        <div className='weather-box'>
            <div>{weather?.name}</div>
            <h2>{weather?.main.temp}C / {weather?.main.temp *1.8+32}F</h2>
            <h3>{weather?.weather[0].description}</h3>
        </div>
    )
}

export default WeatherBox
