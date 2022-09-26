import { useState } from "react"
import classes from "./Weather.module.css"

const Weather = () => {
    const [curWeather, serCurWeather] = useState();
    const API_key = "c85bd09079bcc3fff660a3ce0b7c8305"
    const success = (position) => {
        const lat = position.coords.latitude
        const lon = position.coords.longitude
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&unit=metric`
        fetch(url).then(res => res.json()
            .then(data => {
                console.log(data.weather[0])
                serCurWeather(data.weather[0].main)
            }))
    }
    const error = () => {
        alert("실패")
    }
    navigator.geolocation.getCurrentPosition(success, error);
    return (
        <div className={classes.weather}>
            {curWeather}
        </div>
    )


}
export default Weather