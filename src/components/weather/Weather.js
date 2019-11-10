import React, { Component } from "react";
import "./weather.css";
import axios from "axios";

class Weather extends Component {
  state = {
    city: "",
    country: "",
    humidity: null,
    pressure: null,
    temp: null,
    cloudiness: "",
    wind: null,
    sunrise: null,
    sunset: null,
    error: false,
    fillFields: false,
    countryCode: "",
    icon: ""
  };

  getUserLocation = () => {
    axios
          .get('http://ip-api.com/json')
          .then(res => {
            console.log("user's city: "+res.data.city);
            console.log("user's country: "+res.data.country);
            console.log("user's country: "+res.data.country);
          
          })
          .catch(error => {
           console.log("oops, something went wrong "+error);
          })
  };
  
  weather = () => {
    this.getUserLocation();
    this.state.city && this.state.country
      ? axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${
              this.state.city
            },${
              this.state.country
            }&APPID=8678773211264c0f1e423dd63ffc099d&units=metric`
          )
          .then(res => {
            this.setState({
              humidity: res.data.main.humidity,
              pressure: res.data.main.pressure,
              temp: res.data.main.temp,
              cloudiness: res.data.weather[0].description,
              wind: res.data.wind.speed,
              sunrise: res.data.sys.sunrise,
              sunset: res.data.sys.sunset,
              error: false,
              fillFields: false,
              countryCode: res.data.sys.country,
              icon: res.data.weather[0].icon
            });
            console.log(res);
          
          })
          .catch(error => {
            this.setState({
              error: true,
              fillFields: false
            });
          })
      : this.setState({
          error: false,
          fillFields: true
        });
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.weather();
  };

  render() {
    
    return (
      <div className="weather-wrapper">
        <div className="weather-form">
          <h5>Weather Finder</h5>
          <form onSubmit={this.handleSubmit}>
            <div className="input-field">
              <label htmlFor="city" className="grey-text text-darken-1">
                City
              </label>
              <input type="text" id="city" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="country" className="grey-text text-darken-1">
                Country
              </label>
              <input type="text" id="country" onChange={this.handleChange} />
            </div>
            <button className="btn orange lighten-1 waves-effect waves-light">
              Get Weather
            </button>
          </form>
        </div>

        <div className="weather-summary">
          {this.state.temp && this.state.countryCode !== 'US' &&(
            <p>
              <span>Temperature: </span>{" "}
              {parseFloat(this.state.temp.toFixed(1))} &deg;C
            </p>
          )}
          {this.state.temp && this.state.countryCode === 'US' &&(
            <p>
              <span>Temperature: </span>{" "}
              {parseFloat((this.state.temp * 1.8 + 32).toFixed(1))} F ({parseFloat(this.state.temp.toFixed(1))} &deg;C)
            </p>
          )}
          
          {this.state.cloudiness && (
            <p>
              <span>Cloudiness: </span> {this.state.cloudiness} <img src={`http://openweathermap.org/img/w/${this.state.icon}.png`} alt="cloudiness icon"/>
            </p>
          )}
          {this.state.humidity && (
            <p>
              <span>Humidity:</span> {this.state.humidity} %
            </p>
          )}
          {this.state.pressure && (
            <p>
              <span>Pressure:</span> {this.state.pressure} hpa
            </p>
          )}
          {this.state.wind && this.state.countryCode !== 'US' &&(
            <p>
              <span>Wind:</span> {this.state.wind} m/s
            </p>
          )}
          {this.state.wind && this.state.countryCode === 'US' &&(
            <p>
              <span>Wind:</span> {parseFloat((this.state.wind * 2.236).toFixed(1))} mph ({this.state.wind} m/s)
            </p>
          )}
          {this.state.sunrise && (
            <p>
              <span>Sunrise:</span>{" "}
              {new Date(this.state.sunrise * 1000).toLocaleTimeString()}{" "}
            </p>
          )}
          {this.state.sunset && (
            <p>
              <span>Sunset:</span>{" "}
              {new Date(this.state.sunset * 1000).toLocaleTimeString()}{" "}
            </p>
          )}
          <p className="red-text center">
            <strong>
              {this.state.error && "error"}
              {this.state.fillFields && "Please, fill out all fields"}
            </strong>
          </p>
        </div>
        
      </div>
    );
  }
}

export default Weather;
