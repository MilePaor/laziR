import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Nav from "./components/Nav";
import News from "./components/News";

import Loader from "./components/loader";

import "./css/styles.css";
import "./css/materialize.css";

class App extends React.Component {
  state = {
    apiKey: "77aaa40707ae48e6913523b88e3bf60c",
    selectedSource: "cnn",
    data: null,
    sources: null,
    showGrid: true
  };

  componentDidMount() {
    if (!this.state.data) {
      (async () => {
        try {
          this.setState({
            data: await this.getData(),
            sources: await this.getSource()
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

  async getData(source = this.state.selectedSource) {
    const res = await axios(
      `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${
        this.state.apiKey
      }`
    );
    return await res.data.articles;
  }

  handleSourceChange = e => {
    let targetValue = e.target.value;
    this.setState({
      showGrid: false
    });
    (async () => {
      try {
        this.setState({
          selectedSource: targetValue,
          data: await this.getData(targetValue),
          showGrid: true
        });
      } catch (e) {
        console.log("erorcina", e);
      }
    })();
  };

  render() {
    return (
      <div className="App">
        <Nav
          sourceList={this.state.sources}
          handleSourceChange={this.handleSourceChange}
        />
        <div className="container">
          {this.state.data && this.state.showGrid ? (
            <News data={this.state.data} />
          ) : (
            <Loader />
          )}
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
