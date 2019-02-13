import React from 'react';
import { FacebookIcon } from '../UI/Icon/Icons';
import { PropTypes } from 'prop-types';

const profileCard = props => {

    const headerStyles = {
        position: "relative",
        width: "100%",
        height: 200,
        backgroundColor: "#57B3B1",
        backgroundImage: props.profile_image !== "" && `url(${props.profile_image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: 2
    }

    const facebookIconStyles = {
        position: "absolute",
        top: 5,
        right: 5
    };

    const nameStyles = {
        color: "#57B3B1",
        fontFamily: "'Rajdhani', sans-serif",
        fontSize: 20,
        fontWeight: 400,
        marginTop: 5,
        letterSpacing: 3.5
    }

    const upcomingEventsStyles = {
        color: "#A8A8A8",
        fontSize: ".8em",
        marginTop: -20
    };
    return (
        <section>
            <header style={headerStyles}>
                {props.profile_facebook !== "" && <FacebookIcon style={facebookIconStyles} href={props.profile_facebook} />}
            </header>
            <h1 style={nameStyles}>{props.profile_name}</h1>
            <p style={upcomingEventsStyles}>{props.profile_upcoming_event_count > 1 ?
                `${props.profile_upcoming_event_count} upcoming events` :
                props.profile_upcoming_event_count === 1 ?
                    "1 upcoming event" : "No upcoming events"}
            </p>

        </section>

    )

};

profileCard.propTypes = {
    profile_image: PropTypes.string,
    profile_name: PropTypes.string,
    profile_upcoming_event_count: PropTypes.number,
    profile_facebook: PropTypes.string
}


export default profileCard;