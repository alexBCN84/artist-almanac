import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';
import { selectProps } from '../helpers';
import ArtistCard from './UI/ArtistCard';
import EventCard from './EventCard';
import ProfileCard from './ProfileCard';
import EventsGallery from './EventsGallery';
import { Grid, Row, Col } from './UI/Grid';

const artistGallery = props => {

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
        backgroundColor: "#57B3B1",
        color: "#fff",
        borderRadius: 4,
        border: "1px solid #57B3B1",
        padding: 6
    }
    return (
        <Grid>
            <Row>

                {props.storedArtists.map(artist =>
                    <Col mobile={12} phablet={6} tablet={5} desktop={3} key={artist.id}>
                        <ArtistCard >
                            <ProfileCard {...selectProps(artist, ['profile_facebook', 'profile_id', 'profile_image', 'profile_name', 'profile_upcoming_event_count'])} />
                            <EventsGallery>
                                <Grid gutters={10}>
                                    <Row>
                                        {artist.events.length === 0 ?
                                            <Col mobile={8}><p style={noEventsBoxStyle}>There are no upcoming events for {artist.profile_name}</p></Col> :
                                            artist.events.map(event => <Col mobile={5} key={event.id}><EventCard {...event} /></Col>)}
                                    </Row>
                                </Grid>

                            </EventsGallery>
                        </ArtistCard>
                        <button style={removeButtonStyles} onClick={() => props.onRemoveArtist(artist.id)}>Remove artist from gallery</button>
                    </Col>)
                }
            </Row>
        </Grid>

    )
};

const mapStateToProps = state => {
    return {
        storedArtists: state.artists
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRemoveArtist: (id) => dispatch({ type: actionTypes.REMOVE_ARTIST, artistId: id })
        // onRemoveArtist: (profile_name) => console.log(profile_name)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(artistGallery);
