import React from 'react';
import PropTypes from 'prop-types';
const artistCard = props => {

    const style = {
        margin: "1rem 0",
        padding: "1em 1em",
        boxShadow: "0 1px 2px 0 rgba(34,36,38,.15)",
        backgroundColor: "#fff",
        borderRadius: ".28571429rem",
        border: "1px solid rgba(34,36,38,.15)",
        height: 450,
        overflowY: "hidden",
        ...props.style
    }
    return (
        <article style={style}>{props.children}</article>
    )
}

artistCard.propTypes = {
    children: PropTypes.arrayOf(PropTypes.object)
}

export default artistCard;