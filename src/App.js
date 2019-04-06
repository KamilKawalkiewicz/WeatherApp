import React, { Component } from 'react';
import "./style/App.css";
import WeatherInfo from "./components/WeatherApp"



class App extends Component {
  state = {

  }
  render() {
    return (
      <>
        <div className="container">
          <h1>WeatherApp</h1>

          <div className="citys">

            <div className="citySnk">
              <h2>Sanok</h2>
              <WeatherInfo />
            </div>

            <div className="cityNY">
              <h2>New York</h2>
              <WeatherInfo />
            </div>

            <div className="cityMln">
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
