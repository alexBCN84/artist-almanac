import React, { Component } from 'react';
import Boundary from './Boundary';
import './App.css';
import ArtistSearch from './containers/ArtistSearch/ArtistSearch';
import ArtistGallery from './components/ArtistGallery/ArtistGallery';
import { StyleRoot } from 'radium';
import Layout from './components/UI/Layout/Layout';
import Header from './components/UI/Header/Header';
import Content from './components/UI/Content/Content';
import Herobanner from './components/UI/Herobanner';
import { connect } from 'react-redux';
import Modal from './components/UI/Modal/Modal';
import Backdrop from './components/UI/Backdrop/Backdrop';
import Aux from './hoc/Aux';

class App extends Component {
  render() {
    return (
      <StyleRoot>
        <div className="App">
          <Layout>
            {this.props.isModalOpen && (<Aux><Modal events={this.props.eventsInModal} /> <Backdrop show={this.props.isModalOpen} /></Aux>)}
            <Header>
              <Boundary>
                <ArtistSearch />
              </Boundary>
            </Header>
            <Herobanner />
            {this.props.storedArtists.length > 0 &&
              <Content>
                <Boundary>
                  <ArtistGallery />
                </Boundary>
              </Content>}
          </Layout>
        </div>
      </StyleRoot>
    );
  }
}

const mapStateToProps = state => {
  return {
    storedArtists: state.art.artists,
    eventsInModal: state.mod.events_in_modal,
    isModalOpen: state.mod.is_modal_open
  };
};


export default connect(mapStateToProps)(App);