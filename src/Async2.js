import React, { Component } from 'react';

class Async2 extends Component {
  async Async() {
    let delhiWeather = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("20 Deg");
      }, 1000);
    });

    let mpWeather = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("30 Deg");
      }, 5000);
    });

    delhiWeather.then((result) => {
      alert("Delhi Weather: " + result);
    });

    mpWeather.then((result) => {
      alert("MP Weather: " + result);
    });
  }

  componentDidMount() {
    console.log("Weather control room");
    this.Async();
  }

  render() {
    return (
      <div>
        <h1>Weather Information</h1>
        {/* You can add more JSX elements to display weather information here */}
      </div>
    );
  }
}

export default Async2
