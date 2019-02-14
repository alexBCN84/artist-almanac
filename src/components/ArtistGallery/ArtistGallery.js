import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import { selectProps } from '../../helpers';
import ArtistCard from '../ArtistCard/ArtistCard';
import EventCard from '../EventCard/EventCard';
import ProfileCard from '../ProfileCard/ProfileCard';
import EventsGallery from '../EventsGallery/EventsGallery';
import { Grid, Row, Col } from '../UI/Grid/Grid';
import PropTypes from 'prop-types';

export const artistGallery = props => {

    const buttonStyles = {
        padding: 7,
        lineHeight: "1.4em",
        fontSize: ".8em",
        color: "#fff",
        fontWeight: 800,
        textAlign: "center",
        borderRadius: 4,
        border: "1px solid #000",
        width: "80%"
    }

    const noEventsBoxStyle = {
        width: "100%",
        padding: 7,
        backgroundColor: "#1B1C1C",
        lineHeight: "1.4em",
        fontSize: ".8em",
        color: "#fff",
        textAlign: "center",
        borderRadius: 4,
        border: "1px solid #000"
    }


    const removeButtonStyles = {
        ...buttonStyles,
        backgroundColor: "#E55451",
        border: "1px solid #E55451",
    }

    const seeEventsButtonStyles = {
        ...buttonStyles,
        margin: 20,
        backgroundColor: "#57B3B1",
        border: "1px solid #57B3B1",
        textTransform: "uppercase"
    }

    const displayEvents = artist => {

        const events = artist.events;
        if (events.length === 0) {
            return (
                <Col mobile={8}>
                    <p style={noEventsBoxStyle}>
                        There are no upcoming events for {artist.profile_name}
                    </p>
                </Col>);
        }
        if (events.length > 2) {
            return (events.slice(0, 2).map(event => <Col mobile={5} key={event.id}><EventCard {...event} /></Col>))
        }
    }

    return (
        <Grid>
            <Row>
                {props.storedArtists.map(artist => <Col mobile={12} phablet={6} tablet={5} desktop={3} key={artist.id}>

                    <ArtistCard >

                        <ProfileCard {...selectProps(artist, ['profile_facebook', 'profile_id', 'profile_image', 'profile_name', 'profile_upcoming_event_count'])} />
                        <EventsGallery>
                            <Grid gutters={10}>
                                <Row>
                                    {displayEvents(artist)}

                                </Row>
                            </Grid>
                            {(artist.events.length >= 2) && <button onClick={() => props.onAddEventsToModal(artist.events)} style={seeEventsButtonStyles}>See all the events</button>}
                        </EventsGallery>
                    </ArtistCard>
                    <button style={removeButtonStyles} onClick={() => props.onRemoveArtist(artist.id)}>{`Remove ${artist.profile_name}`}</button>
                </Col>)

                }
            </Row>
        </Grid>
    )
}


artistGallery.propTypes = {
    storedArtists: PropTypes.arrayOf(PropTypes.object).isRequired,
    onRemoveArtists: PropTypes.func
}

const mapStateToProps = state => {
    return {
        storedArtists: state.art.artists
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRemoveArtist: (id) => dispatch({ type: actionTypes.REMOVE_ARTIST, artistId: id }),
        onAddEventsToModal: (events) => dispatch({ type: actionTypes.ADD_ARTIST_TO_MODAL, add_artist: events }),
        onRemoveArtistFromModal: () => dispatch({ type: actionTypes.REMOVE_ARTIST_FROM_MODAL })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(artistGallery);
