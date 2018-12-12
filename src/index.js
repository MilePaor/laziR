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

    showGrid: true
  };

  componentDidMount() {
    if (!this.state.newsData) {
      (async () => {
        try {
          this.setState({
            newsData: await this.getData(),
            newsSources: await this.getSource()
          });
        } catch (e) {
          console.log("erorcina", e);
        }
      })();
    }
    console.log("mount");
  }

  async getSource() {
    const res = await axios("https://newsapi.org/v1/sources");
    return await res.data.sources;
  }
  // get news data
  async getData(source = this.state.newsSelectedSource) {
    const res = await axios(
      `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${
        this.state.apiKeyNews
      }`
    );
    return await res.data.articles;
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
          newsData: await this.getData(targetValue),
          showGrid: true
        });
      } catch (e) {
        console.log("erorcina", e);
      }
    })();
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
        <WeatherWidget />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
