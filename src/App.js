import React, { Component } from 'react';
import "./style/App.css";
import WeatherResult from "./components/WeatherResult"


// Weather img
// import sunny from "../img/animated/day.svg";
// import night from "../img/animated/night.svg";
// import rainy from "../img/animated/rainy-1.svg";
// import cloudy from "../img/animated/cloudy-day-2.svg";
// import snowy from "../img/animated/snowy-1.svg"
// import thunder from "../img/animated/thunder.svg"

// apiKey
const APIKey = "b93591400e36d6a0817384aac4a7bcee"




class App extends Component {
  state = {
    value: "",
    date: "",
    temp: "",
    description: "",
    sunrise: "",
    sunset: "",
    temp_max: "",
    temp_min: "",
    pressure: "",
    windSpeed: "",
    err: false
  }
  handleChange = (e) => {
    const value = e.target.value

    this.setState({
      value
    })
  }

  getWeather = (e) => {
    e.preventDefault()
    console.log("działa")
    const city = this.state.value
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric&lang=pl`

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response
        } else if (city === "") {
          alert("Wpisz miasto!")
        }
        throw Error("Brak połączenia")

      })
      .then(response => response.json())
      .then(data => {
        const time = new Date().toLocaleTimeString()
        this.setState({
          date: time,
          temp: data.main.temp,
          description: data.weather[0].description,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp_max: data.main.temp_max,
          temp_min: data.main.temp_min,
          pressure: data.main.pressure,
          windSpeed: data.wind.speed,
          err: false
        })
      })
      .catch(err => {
        this.setState(
          {
            err: true
          }
        )
      })
  }

  render() {
    const { value, err } = this.state
    return (
      <>
        <div className="container">
          <h1>WeatherApp</h1>

          <div className="citys">
            <div className="city">
              <input onChange={this.handleChange} value={value} type="text" />
              <button onClick={this.getWeather}>Znajdź Miasto</button>
              <WeatherResult weatherInfo={this.state} />
              {err ? `Nie ma w bazie tego miasta:${value}` : false}
            </div>
          </div >
        </div >
      </>
    );
  }
}
export default App;
