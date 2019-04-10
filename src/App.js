import React, { Component } from 'react';
import "./style/App.css";
import WeatherInfo from "./components/WeatherApp"

const APIKeySnk = "435d36d7c302598eae1424aa06754a46";
const ApiKeyNYC = "035e09e8e7f7132f676ba4b4c21af02c";
const ApiKeyMLN = "709db40e3235434983252d0a4c3599ba"
class App extends Component {
  state = {
    Sanok: {
      dateSnk: "",
      tempSnk: "",
      descriptionSnk: "",
      sunriseSnk: "",
      sunsetSnk: "",
      temp_maxSnk: "",
      temp_minSnk: "",
      pressureSnk: "",
      windSpeedSnk: "",
      errSnk: false
    },
    NewYork: {
      dateNY: "",
      tempNY: "",
      descriptionNY: "",
      sunriseNY: "",
      sunsetNY: "",
      temp_maxNY: "",
      temp_minNY: "",
      pressureNY: "",
      windSpeedNY: "",
      errNY: false
    },
    Melbourne: {
      dateMLN: "",
      tempMLN: "",
      descriptionMLN: "",
      sunriseMLN: "",
      sunsetMLN: "",
      temp_maxMLN: "",
      temp_minMLN: "",
      pressureMLN: "",
      windSpeedMLN: "",
      errMLN: false
    }

  }
  componentDidMount = () => {
    console.log("Działa")
    const snkAPI = `https://api.openweathermap.org/data/2.5/weather?q=Sanok&appid=${APIKeySnk}&units=metric&lang=pl`
    const nycApi = `https://api.openweathermap.org/data/2.5/weather?q=New%20York,usa&appid=${ApiKeyNYC}&units=metric&lang=pl`
    const mlnAPI = `https://api.openweathermap.org/data/2.5/weather?q=Melbourne,au&appid=${ApiKeyMLN}&units=metric&lang=pl`

    // Sanok Api
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
            dateSnk: time,
            tempSnk: data.main.temp,
            descriptionSnk: data.weather[0].description,
            sunriseSnk: data.sys.sunrise,
            sunsetSnk: data.sys.sunset,
            temp_maxSnk: data.main.temp_max,
            temp_minSnk: data.main.temp_min,
            pressureSnk: data.main.pressure,
            windSpeedSnk: data.wind.speed,
            errSnk: false
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
    // New York Api
    fetch(nycApi)
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
          NewYork: {
            dateNY: time,
            tempNY: data.main.temp,
            descriptionNY: data.weather[0].description,
            sunriseNY: data.sys.sunrise,
            sunsetNY: data.sys.sunset,
            temp_maxNY: data.main.temp_max,
            temp_minNY: data.main.temp_min,
            pressureNY: data.main.pressure,
            windSpeedNY: data.wind.speed,
            errNY: false
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
    //Melbourne Api
    fetch(mlnAPI)
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
          Melbourne: {
            dateMLN: time,
            tempMLN: data.main.temp,
            descriptionMLN: data.weather[0].description,
            sunriseMLN: data.sys.sunrise,
            sunsetMLN: data.sys.sunset,
            temp_maxMLN: data.main.temp_max,
            temp_minMLN: data.main.temp_min,
            pressureMLN: data.main.pressure,
            windSpeedMLN: data.wind.speed,
            errMLN: false
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
    const { errSnk, dateSnk, tempSnk, descriptionSnk, temp_maxSnk, temp_minSnk } = this.state.Sanok;
    const { errNY, dateNY, tempNY, descriptionNY, temp_maxNY, temp_minNY } = this.state.NewYork;
    const { errMLN, dateMLN, tempMLN, descriptionMLN, temp_maxMLN, temp_minMLN } = this.state.Melbourne
    return (
      <>
        <div className="container">
          <h1>WeatherApp</h1>
          <div className="citys">

            <div className="city">
              <h2>Sanok</h2>
              <p>{`Data ${dateSnk}`}</p>
              <p>{descriptionSnk}</p>
              <p>Temp {tempSnk} &#176;C</p>
              <p>Temp. max {temp_maxSnk}</p>
              <p>Temp. min {temp_minSnk}</p>
              <p>{errSnk ? "Bład połączenia" : ""}</p>
              <WeatherInfo />
            </div>

            <div className="city">
              <h2>New York</h2>
              <p>{`Data ${dateNY}`}</p>
              <p>{descriptionNY}</p>
              <p>Temp {tempNY} &#176;C</p>
              <p>Temp. max {temp_maxNY}</p>
              <p>Temp. min {temp_minNY}</p>
              <p>{errNY ? "Bład połączenia" : ""}</p>
              <WeatherInfo />
            </div>

            <div className="city">
              <h2>Melbourne</h2>
              <p>{`Data ${dateMLN}`}</p>
              <p>{descriptionMLN}</p>
              <p>Temp {tempMLN} &#176;C</p>
              <p>Temp. max {temp_maxMLN}</p>
              <p>Temp. min {temp_minMLN}</p>
              <p>{errMLN ? "Bład połączenia" : ""}</p>
              <WeatherInfo />
            </div>

          </div>

        </div>
      </>
    );
  }
}
export default App;
