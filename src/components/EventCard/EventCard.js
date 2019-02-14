import React from 'react';
import FormatedDate from '../FormatedDate/FormatedDate';
import PropTypes from 'prop-types';
const eventCard = props => {

    const cardStyle = {
        position: "relative",
        borderRadius: 4,
        boxShadow: "0 3px 15px 0 rgba(0,0,0,.09)",
        overflow: "hidden",
        width: "100%",
        height: "100%",

    };

    const cityStyles = {
        marginLeft: 3,
        fontSize: 9,
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textAlign: "right"
    }

    const countryStyles = {
        fontSize: 7,
        justifyContent: "right",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textAlign: "right"
    }

    const headerStyles = {
        display: "inline-block",
        width: "50%",
        paddingBottom: 5,
        backgroundColor: "#E4E4E4"
    }

    const venueStyles = {
        card: {
            height: 50,
        },
        text: {
            fontSize: "2vh"
        }
    }

    return (

        <section style={cardStyle}>
            <div style={headerStyles}>
                <strong style={cityStyles}>{props.city}</strong>
            </div>
            <div style={headerStyles}>
                <span style={countryStyles}>{props.country}</span>
            </div>
            <div style={venueStyles.card}><p style={venueStyles.text}>{props.venue}</p></div>
            <FormatedDate date={props.date} />
        </section>

    )

}

eventCard.propTypes = {
    city: PropTypes.string,
    country: PropTypes.string,
    venue: PropTypes.string,
    date: PropTypes.string
}
export default eventCard;