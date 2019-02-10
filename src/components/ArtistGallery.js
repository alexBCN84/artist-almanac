import React from 'react';
import Aux from '../hoc/Aux';
import { connect } from 'react-redux';
import { selectProps } from '../helpers';
import ArtistCard from './ArtistCard';
import EventCard from './EventCard';
import ProfileCard from './ProfileCard';
import EventsGallery from './EventsGallery';
const artistGallery = props => {
    return (
        <Aux>
            <h2>Artists Gallery</h2>
            {props.storedArtists.map(artist =>
                <ArtistCard key={artist.profile_id}>
                    <ProfileCard {...selectProps(artist, ['profile_facebook', 'profile_id', 'profile_image', 'profile_name', 'profile_upcoming_event_count'])} />
                    <EventsGallery>
                        {artist.events.map(event => <EventCard key={event.id} {...event} />)}
                    </EventsGallery>
                </ArtistCard>)
            }
        </Aux>

    )
};

const mapStateToProps = state => {
    return {
        storedArtists: state.artists
    };
};

export default connect(mapStateToProps)(artistGallery);
