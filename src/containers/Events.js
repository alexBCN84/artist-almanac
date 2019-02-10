import React, { Component } from 'react';
import axios from 'axios';
import EventCard from '../components/EventCard';
import { selectProps } from '../helpers';
// import { connect } from 'react-redux';

class Events extends Component {
    state = {
        events: []
    }
    componentDidMount() {
        this.getEvents();
    }

    getEvents = async () => {

        const artistName = this.props.artist;
        const apiCallData = await axios.get(`https://rest.bandsintown.com/artists/${artistName}/events?app_id=fortuna`);
        const eventsData = apiCallData.data

        const artistEvents = eventsData.map(event => {
            return {
                id: event.id,
                venue: event.venue.name,
                city: event.venue.city,
                country: event.venue.country,
                date: event.datetime
            }
        });

        this.setState({ events: [...this.state.events, ...artistEvents] });

    }

    renderEvents = () => {
        const events = [...this.state.events];
        return events.map(event => {
            const selectedProps = selectProps(event, ['venue', 'city', 'country', 'date']);
            return (<EventCard key={event.id} {...selectedProps} />);
        })

    }

    render() {
        return (this.renderEvents())
    }
};

// propTypes

// const mapStateToProps = state => {
//     return { artist: state.name.value };
// };

// export default connect(mapStateToProps)(Events);

export default Events