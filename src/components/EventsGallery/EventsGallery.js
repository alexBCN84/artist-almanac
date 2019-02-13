import React from 'react';
import Aux from '../../hoc/Aux';
import PropTypes from 'prop-types';
const eventsGallery = props => {
    return (
        <Aux>{props.children}</Aux>
    )
}

eventsGallery.propTypes = {
    children: PropTypes.node
}

export default eventsGallery;