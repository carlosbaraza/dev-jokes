import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import jokes from "./jokes.json";

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
      </div>
    );
  }
}

export default App;
