import React, { Component } from 'react';
import Boundary from './containers/Boundary';
import './App.css';
import axios from 'axios';
class App extends Component {

  componentDidMount() {

  }
  render() {
    return (
      <div className="App">
        <Boundary>
          <p>The Artist Almanac</p>
        </Boundary>
      </div>
    );
  }
}

export default App;
