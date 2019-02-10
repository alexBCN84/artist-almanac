import React, { Component } from 'react';
import Boundary from './Boundary';
import './App.css';
import ArtistSearch from './containers/ArtistSearch';
import ArtistGallery from './components/ArtistGallery';
import { StyleRoot } from 'radium';
class App extends Component {
  render() {
    return (
      <StyleRoot>
        <div className="App">
          <Boundary>
            <p>The Artist Almanac</p>
            <ArtistSearch />
            <ArtistGallery />
          </Boundary>
        </div>
      </StyleRoot>
    );
  }
}

export default App;
