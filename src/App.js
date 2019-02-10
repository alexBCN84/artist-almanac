import React, { Component } from 'react';
import Boundary from './Boundary';
import './App.css';
import ArtistTile from './components/ArtistTile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Boundary>
          <p>The Artist Almanac</p>
          <ArtistTile />
        </Boundary>
      </div>
    );
  }
}

export default App;
