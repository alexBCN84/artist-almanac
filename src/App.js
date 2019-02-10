import React, { Component } from 'react';
import Boundary from './Boundary';
import './App.css';
import ArtistSearch from './containers/ArtistSearch';
import ArtistGallery from './components/ArtistGallery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Boundary>
          <p>The Artist Almanac</p>
          <ArtistSearch />
          <ArtistGallery />
        </Boundary>
      </div>
    );
  }
}

export default App;
