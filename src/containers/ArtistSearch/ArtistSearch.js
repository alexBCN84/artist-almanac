import React, { Component } from 'react';
import axios from 'axios';
import { selectProps } from '../../helpers';
import * as actionTypes from '../../store/actions';
import { connect } from 'react-redux';
import { SearchIcon } from '../../components/UI/Icon/Icons';
export class artistSearch extends Component {

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
        const inputStyles = {
            position: "relative",
            fontSize: 16,
            color: "#8f8f8f",
            fontWeight: 500,
            height: 40,
            marginTop: 15,
            width: "100%",
            border: "1px solid #cdcdcd",
            borderRadius: 5,
            boxShadow: "0 1px 3px 0 rgba(0,0,0,.08)",
            padding: "0 10px 0 37px",
            outline: "none",
            boxSizing: "border-box",
            backgroundColor: "transparent"
        }

        const buttonStyles = {
            position: "absolute",
            top: 40,
            right: 20
        }

        return (
            <form onSubmit={this.fetchArtistData}>
                <div>
                    <input style={inputStyles} ref="artist" type="text" name="artist" placeholder="enter artist name" />
                    <span style={buttonStyles} id="get-artist" type="submit"><SearchIcon /></span>
                </div>
            </form>
        )
    }
}
const mapStateToProps = state => {
    return {
        storedArtists: state.art.artists
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onStoreArtist: (artist) => dispatch({ type: actionTypes.ADD_ARTIST, artist: artist })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(artistSearch)