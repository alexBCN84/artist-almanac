import React, { Component } from 'react';
import axios from 'axios';

class Artist extends Component {
    state = {
        name: null,
        id: null,
        image_url: null,
        facebook_page_url: null,
        upcoming_event_count: null
    }
    componentDidMount() {
        this.getArtist();
    }

    getArtist = async () => {

        const artistName = "Ariadna Grande";
        const apiCallData = await axios.get(`https://rest.bandsintown.com/artists/${artistName}?app_id=fortuna`);
        const artistData = apiCallData.data
        console.log(artistData);
        const { name, id, image_url, facebook_page_url, upcoming_event_count } = artistData;
        this.setState({ name, id, image_url, facebook_page_url, upcoming_event_count });
    }

    renderArtistData = () => {
        const artistData = { ...this.state };
        return Object.keys(artistData).map((prop, i) => <p key={i}><strong>{prop}:</strong> {artistData[prop]}</p>);
    }
    render() {
        console.log(this.state);
        return (this.renderArtistData())
    }
};

// propTypes

export default Artist