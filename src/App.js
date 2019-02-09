import React, { Component } from 'react';
import Boundary from './containers/Boundary';
import './App.css';

class App extends Component {
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
