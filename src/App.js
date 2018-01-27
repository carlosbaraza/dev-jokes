import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import jokes from "./jokes.json";
import { ClapIcon } from "./clap-icon";

const sortedJokes = jokes.sort(
  (j1, j2) => (j1.createdAt < j2.createdAt ? 1 : -1)
);

const joke = sortedJokes[0];

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2
          dangerouslySetInnerHTML={{
            __html: joke.body
          }}
        />
        <div className="claps">
          <ClapIcon className="claps__ClapIcon" />
          <p>{joke.claps} claps</p>
        </div>
      </div>
    );
  }
}

export default App;
