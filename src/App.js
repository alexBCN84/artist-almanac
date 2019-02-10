import React, { Component } from 'react';
import Boundary from './Boundary';
import './App.css';
import ArtistSearch from './containers/ArtistSearch';
import ArtistGallery from './components/ArtistGallery';
import { StyleRoot } from 'radium';
import Layout from './components/UI/Layout';
import Header from './components/UI/Header';
import Content from './components/UI/Content';
class App extends Component {
  render() {
    return (
      <StyleRoot>
        <div className="App">
          <Layout>
            <Header>
              <Boundary>
                <ArtistSearch />
              </Boundary>
            </Header>
            <Content>
              <ArtistGallery />
            </Content>
          </Layout>
        </div>
      </StyleRoot>
    );
  }
}

export default App;
