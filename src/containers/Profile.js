import React, { Component } from 'react';
import axios from 'axios';
import ProfileCard from '../components/ProfileCard';
import { selectProps } from '../helpers';
// import * as actionTypes from '../store/actions';
// import { connect } from 'react-redux';
class Profile extends Component {
    state = {
        name: null,
        id: null,
        image_url: null,
        facebook_page_url: null,
        upcoming_event_count: null
    }

    componentDidMount() {
        this.getProfileData();
    }

    getProfileData = async () => {
        const name = this.props.artist;
        const apiCall = await axios.get(`https://rest.bandsintown.com/artists/${name}?app_id=fortuna`);
        const apiCallData = apiCall.data;
        const artistData = selectProps(apiCallData, ['name', 'id', 'image_url', 'facebook_page_url', 'upcoming_event_count']);
        this.setState({ ...this.state, ...artistData });
    }

    renderProfile = () => {

        const artistData = { ...this.state };
        return <ProfileCard {...artistData} />
    }
    render() {

        return (this.renderProfile())
    }
};

// propTypes

// const mapStateToProps = state => {
//     return { artist: state.name.value };
// };

// export default connect(mapStateToProps)(Profile);

export default Profile