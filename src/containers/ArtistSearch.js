import React, { Component } from 'react';
import axios from 'axios';
import { selectProps } from '../helpers';
import * as actionTypes from '../store/actions';
import { connect } from 'react-redux';
import Container from '../components/UI/Container';
class artistSearch extends Component {

    fetchArtistData = async (e) => {
        e.preventDefault();
        let artist = e.target.elements.artist.value;
        const profileApiCall = await axios.get(`https://rest.bandsintown.com/artists/${artist}?app_id=fortuna`);
        const eventsApiCall = await axios.get(`https://rest.bandsintown.com/artists/${artist}/events?app_id=fortuna`);
        const profileApiData = profileApiCall.data;
        const eventsApiData = eventsApiCall.data;
        const profile = selectProps(profileApiData, ['name', 'id', 'image_url', 'facebook_page_url', 'upcoming_event_count']);
        const events = eventsApiData.map(event => {
            return {
                id: event.id,
                venue: event.venue.name,
                city: event.venue.city,
                country: event.venue.country,
                date: event.datetime
            }
        });

        const artistData = { profile: { ...profile }, events: [...events] }
        this.persistData(artistData);
        this.refs.artist.value = '';

    }

    persistData = newArtist => {
        if (this.props.storedArtists.length > 0) {
            const newArtistProfileId = newArtist.profile.id;
            const storedArtistsProfileIds = this.props.storedArtists.map(artist => artist.profile_id);
            const isArtistInStore = storedArtistsProfileIds.includes(newArtistProfileId);
            return isArtistInStore ? null : this.props.onStoreArtist(newArtist);
        }

        this.props.onStoreArtist(newArtist);
    }

    render() {
        return (
            <Container style={{ backgroundColor: 'yellow' }}>
                <form onSubmit={this.fetchArtistData}>
                    <div className="form-group">
                        <input ref="artist" type="text" name="artist" placeholder="enter artist name" />
                        <button id="get-artist" type="submit">&ensp;Add artist</button>
                    </div>
                </form>
            </Container>
        )
    }
}
const mapStateToProps = state => {
    return {
        storedArtists: state.artists
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onStoreArtist: (artist) => dispatch({ type: actionTypes.ADD_ARTIST, artist: artist })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(artistSearch)