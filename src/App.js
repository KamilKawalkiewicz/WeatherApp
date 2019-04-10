import React, { Component } from 'react';
import "./style/App.css";
import WeatherInfo from "./components/WeatherApp"

const APIKeySnk = "435d36d7c302598eae1424aa06754a46"

class App extends Component {
  state = {
    Sanok: {
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
  }
  componentWillMount = () => {
    console.log("Działa")
    const snkAPI = `https://crossorigin.me/https://api.openweathermap.org/data/2.5/weather?q=Sanok&APPID=${APIKeySnk}&units=metric&lang=pl`

    fetch(snkAPI)
      .then(response => {
        if (response.ok) {
          return response
        }
        throw Error("Brak połączenia")
      })
      .then(response => response.json())
      .then(data => {
        const time = new Date().toLocaleDateString()
        this.setState({
          Sanok: {
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
          }
        })
      })
      .catch(err => {
        console.log(err)
        this.setState({
          Sanok: {
            err: true
          }
        })
      })
  }
  render() {
    const { err, date, temp, description, temp_max, temp_min } = this.state.Sanok
    console.log(description)
    return (
      <>
        <div className="container">
          <h1>WeatherApp</h1>
          <div className="citys">

            <div className="city">
              <h2>Sanok</h2>
              <p>{`Data ${date}`}</p>
              <p>{description}</p>
              <p>Temp {temp} &#176;C</p>
              <p>Temp. max {temp_max}</p>
              <p>Temp. min {temp_min}</p>
              <p>{err ? "Bład połączenia" : ""}</p>
              <WeatherInfo />
            </div>

            <div className="city">
              <h2>New York</h2>
              <p></p>
              <WeatherInfo />
            </div>

            <div className="city">
              <h2>Melbourne</h2>

              <WeatherInfo />
            </div>

          </div>

        </div>
      </>
    );
  }
}
export default App;
