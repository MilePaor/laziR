import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Nav from "./components/Nav";
import News from "./components/News";
import WeatherWidget from "./components/WeatherWidget";

import Loader from "./components/loader";

import "./css/styles.css";
import "./css/materialize.css";

class App extends React.Component {
  state = {
    apiKeyNews: "77aaa40707ae48e6913523b88e3bf60c",
    newsSelectedSource: "cnn",
    newsData: null,
    newsSources: null,

    apiKeyWeather: "f5cbece53f9805de76ff787b7dddb949",
    selectedCity: "novi beograd",
    weatherData: null,

    showGrid: true,

    weatherWidgetOpen: false
  };

  componentDidMount() {
    if (!this.state.newsData) {
      (async () => {
        try {
          this.setState({
            newsData: await this.getNewsData(),
            newsSources: await this.getSource(),
            weatherData: await this.getWeatherData()
          });
        } catch (e) {
          console.log("erorcina", e);
        }
      })();
    }
    // console.log("mount");
  }

  async getSource() {
    const res = await axios("https://newsapi.org/v1/sources");
    return await res.data.sources;
  }
  // get news data
  async getNewsData(source = this.state.newsSelectedSource) {
    const res = await axios(
      `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${
        this.state.apiKeyNews
      }`
    );
    return await res.data.articles;
  }

  // get weather data
  async getWeatherData(source = this.state.selectedCity) {
    const res = await axios(
      `https://api.openweathermap.org/data/2.5/forecast/daily?q=${source}&units=metric&APPID=${
        this.state.apiKeyWeather
      }&cnt=3`
    );
    return await res.data;
  }

  // handlers
  handleSourceChange = e => {
    let targetValue = e.target.value;
    this.setState({
      showGrid: false
    });
    (async () => {
      try {
        this.setState({
          newsSelectedSource: targetValue,
          newsData: await this.getNewsData(targetValue),
          showGrid: true
        });
      } catch (e) {
        console.log("erorcina", e);
      }
    })();
  };
  handleWidget = e => {
    this.setState((prevState, props) => {
      return { weatherWidgetOpen: !prevState.weatherWidgetOpen };
    });
  };
  // render
  render() {
    return (
      <div className="App">
        <Nav
          sourceList={this.state.newsSources}
          handleSourceChange={this.handleSourceChange}
        />
        <div className="container">
          {this.state.newsData && this.state.showGrid ? (
            <News data={this.state.newsData} />
          ) : (
            <Loader />
          )}
        </div>
        {this.state.weatherData && (
          <WeatherWidget
            data={this.state.weatherData}
            weatherWidgetOpen={this.state.weatherWidgetOpen}
            clickHandler={this.handleWidget}
          />
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
