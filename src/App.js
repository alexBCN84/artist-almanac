import React, { Component } from 'react';
import Boundary from './Boundary';
import './App.css';
import ArtistSearch from './containers/ArtistSearch/ArtistSearch';
import ArtistGallery from './containers/ArtistGallery/ArtistGallery';
import { StyleRoot } from 'radium';
import Layout from './components/UI/Layout/Layout';
import Header from './components/UI/Header/Header';
import Content from './components/UI/Content/Content';
import Herobanner from './components/UI/Herobanner';
import { connect } from 'react-redux';

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
            <Herobanner />
            {this.props.storedArtists.length > 0 &&
              <Content>
                <ArtistGallery />
              </Content>}
          </Layout>
        </div>
      </StyleRoot>
    );
  }
}

const mapStateToProps = state => {
  return {
    storedArtists: state.artists
  };
};


export default connect(mapStateToProps)(App)