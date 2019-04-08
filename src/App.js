import React, { Component } from 'react';
import "./style/App.css";
import Moment from 'react-moment';
import 'moment-timezone';
import WeatherInfo from "./components/WeatherApp"



class App extends Component {
  state = {
    snkTime: "",
    nycTime: ""
  }



  europeDate = () => {
    const europeTime = new Date();

    const seconds = europeTime.getSeconds() < 10 ? "0" + europeTime.getSeconds() : europeTime.getSeconds();
    const minutes = europeTime.getMinutes() < 10 ? "0" + europeTime.getMinutes() : europeTime.getMinutes();
    const hours = europeTime.getHours() < 10 ? "0" + europeTime.getHours() : europeTime.getHours();


    const snkTime = `${hours}:${minutes}:${seconds}`
    const nycTime = `${hours - 6}:${minutes}:${seconds}`
    // const mlnTime = `${hours + 4}:${minutes}:${seconds}`

    this.setState({
      snkTime,
      nycTime,
      // mlnTime
    })
  }
  componentDidMount() {
    setInterval(() => { this.europeDate() }, 1000)
  }

  render() {
    const { snkTime } = this.state;
    const { nycTime } = this.state;

    const unixTimestamp = 1554750715
    return (
      <>
        <div className="container">
          <h1>WeatherApp</h1>

          <div className="citys">

            <div className="city">
              <h2>Sanok</h2>
              <p>{snkTime}</p>
              <WeatherInfo />
            </div>

            <div className="city">
              <h2>New York</h2>
              <p>{nycTime}</p>
              <WeatherInfo />
            </div>

            <div className="city">
              <h2>Melbourne</h2>
              <p></p>
              <WeatherInfo />
            </div>

          </div>

        </div>
      </>
    );
  }
}
export default App;
