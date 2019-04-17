import React, { Component } from 'react';
import "./style/App.css";
import "./style/footer.css"
import WeatherResult from "./components/WeatherResult"

// apiKey
const APIKey = "b93591400e36d6a0817384aac4a7bcee"




class App extends Component {
  state = {
    value: "Sanok",
    date: "",
    temp: "---",
    description: "---",
    sunrise: "---",
    sunset: "---",
    temp_max: "---",
    temp_min: "---",
    pressure: "---",
    windSpeed: "---",
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

          <div className="city">
            <div className="searchingPanel">
              <input onChange={this.handleChange} value={value} type="text" />
              <button onClick={this.getWeather}>Szukaj</button>
            </div>
            <WeatherResult weatherInfo={this.state} />
            <p>{err ? `Nie ma w bazie tego miasta:${value}` : false}</p>
          </div>
          <footer>
            <p> Kamil Kawałkiewicz</p>
            <p>Animate icon from https://creativecommons.org/licenses/by/4.0/</p>
          </footer>
        </div >
      </>
    );
  }
}
export default App;
