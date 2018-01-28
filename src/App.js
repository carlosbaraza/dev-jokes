import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ClapIcon } from "./clap-icon";
import { fetchJoke } from "./services/jokes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: fetchJoke(0),
      jokeIndex: 0
    };
  }

  nextJoke = () => {
    const joke = fetchJoke(this.state.jokeIndex + 1);

    if (joke) {
      this.setState({
        joke,
        jokeIndex: this.state.jokeIndex + 1
      });
    }
  };

  render() {
    const { joke } = this.state;

    return (
      <div className="App">
        <h2
          dangerouslySetInnerHTML={{
            __html: joke.body
          }}
        />
        <div className="controls">
          <div className="claps">
            <ClapIcon className="claps__ClapIcon controls__button" />
            <p>{joke.claps} claps</p>
          </div>

          <div className="moar controls__button" onClick={this.nextJoke}>
            MOAR!
          </div>
        </div>
      </div>
    );
  }
}

export default App;
