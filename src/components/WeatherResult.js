import React, { Component } from 'react';
import '../style/WeatherResult.css'

// Weather img
import sunny from "../img/animated/day.svg";
import rainy from "../img/animated/rainy-1.svg";
import cloudy from "../img/animated/cloudy-day-2.svg";
import snowy from "../img/animated/snowy-1.svg"
import thunder from "../img/animated/thunder.svg"

class WeatherResult extends Component {
    state = {
        weatherImg: ""
    }
    componentDidUpdate = (prevState) => {
        const description = this.props.weatherInfo.description;
        // console.log(this.props.weatherInfo.value)
        // console.log(prevState.weatherInfo.value)
        if (prevState.weatherInfo.description !== this.props.weatherInfo.description) {
            if (description === "słabe opady deszczu") {
                this.setState({
                    weatherImg: rainy
                })
            } else if (description === "bezchmurnie") {
                this.setState({
                    weatherImg: sunny
                })
            } else if (description === "lekkie zachmurzenie" || description === "całkowite zachmurzenie" || description === "pochmurno z przejaśnieniami") {
                this.setState({
                    weatherImg: cloudy
                })
            }
            else if (description === "lekkie opady śniegu") {
                this.setState({
                    weatherImg: snowy
                })
            } else if (description === "burza") {
                this.setState({
                    weatherImg: thunder
                })
            }
        }
    }


    render() {
        const { weatherImg } = this.state
        const { date, temp, description, sunrise, sunset, temp_max, temp_min, pressure, windSpeed } = this.props.weatherInfo
        const sunriceTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()
        return (
            <>
                <div className="weatherInfo">
                    <p>Godzina(pl):{date}</p>
                    <div className="imgWeather">
                        <img src={weatherImg} alt="weather img" />
                    </div>
                    <p>{description}</p>

                    <div className="temp">
                        <p>Temeratura: {temp}&#176;C</p>
                        <p>Temp max: {temp_max}&#176;C</p>
                        <p>Temp min: {temp_min}&#176;C</p>
                    </div>
                    <div className="sunMovement">
                        <p>Wschód słońca: {sunriceTime}</p>
                        <p>Zachód słońca: {sunsetTime}</p>
                    </div>
                    <div className="others">
                        <p>Ciśnienie: {pressure}hPa</p>
                        <p>Siła wiatru: {windSpeed}m/s</p>
                    </div>
                </div>
            </>
        );
    }

}
export default WeatherResult;


