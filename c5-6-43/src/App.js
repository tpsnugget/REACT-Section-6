import React, { Component } from 'react';
import './App.css';
import Game from "./Game"
import Rando from "./Rando"
import Button from "./Button"
import BrokenClick from "./BrokenClick"
import Clicker from "./Clicker"

class App extends Component {
  render() {
    return (
      <div>
        <Clicker />
      </div>

    )
  }
}

export default App;
