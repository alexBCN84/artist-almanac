import React from 'react';
import Container from './UI/Container';
const eventCard = props => {
    console.log(props);
    const cardStyle = {
        position: "relative",
        paddingTop: 5,
        borderRadius: 4,
        boxShadow: "0 3px 15px 0 rgba(0,0,0,.09)",
        overflow: "hidden",
        width: "100%",
        height: 100,

    };

    const cityStyles = {
        textAlign: "left",
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
        width: "50%"
    }

    return (

        <article style={cardStyle}>
            <div style={headerStyles}>
                <strong style={cityStyles}>{props.city}</strong>
            </div>
            <div style={headerStyles}>
                <span style={countryStyles}>{props.country}</span>
            </div>
        </article>

    )
    // return Object.keys(props).map((prop, i) => <p key={i}><strong>{prop}:</strong> {props[prop]}</p>);
}

export default eventCard;