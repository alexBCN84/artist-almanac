import React from 'react';

const profileCard = props => {
    return Object.keys(props).map((prop, i) => <p key={i}><strong>{prop}:</strong> {props[prop]}</p>);
};

export default profileCard;