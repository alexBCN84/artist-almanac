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
    return (
        <Grid>
            <Row>

                {props.storedArtists.map(artist =>
                    <Col mobile={12} phablet={5} desktop={3} key={artist.id}>
                        <ArtistCard >
                            <ProfileCard {...selectProps(artist, ['profile_facebook', 'profile_id', 'profile_image', 'profile_name', 'profile_upcoming_event_count'])} />
                            <EventsGallery>
                                {artist.events.map(event => <EventCard key={event.id} {...event} />)}
                            </EventsGallery>
                        </ArtistCard>
                        <button onClick={() => props.onRemoveArtist(artist.id)}>Remove artist from gallery</button>
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
