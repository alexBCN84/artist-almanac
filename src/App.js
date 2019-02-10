import React, { Component } from 'react';
import Boundary from './Boundary';
import './App.css';
import Artist from './containers/Artist';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Boundary>
          <p>The Artist Almanac</p>
          <Artist />
        </Boundary>
      </div>
    );
  }
}

export default App;
