import React from 'react';
import Profile from '../containers/Profile';
import Events from '../containers/Events';
import Aux from '../hoc/Aux';
import AddArtist from './AddArtist';
import * as actionTypes from '../store/actions';
import { connect } from 'react-redux';
const artistTile = props => {
    let artist = 'Alejandro Sanz';
    const submit = (value) => {
        // print the form values to the console
        console.log(value)
    }

    console.log(props.artist)
    return (
        <Aux>
            <AddArtist onSubmit={submit} />
            <Profile artist={artist} />
            <Events artist={artist} />
        </Aux>
    )
}
const mapStateToProps = state => {
    return { artist: state.name.value };
};

const mapDispatchToProps = dispatch => {
    return { storeSearch: (value) => dispatch({ type: actionTypes.ADD_ARTIST, value: value }) };
};

export default connect(mapStateToProps, mapDispatchToProps)(artistTile);

