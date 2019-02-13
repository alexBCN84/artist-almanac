import React from 'react';
import PropTypes from 'prop-types';

const content = props => {
    const style = {
        backgroundColor: '#EDEDED',
        paddingBottom: 60,
        ...props.style
    }
    return (
        <div style={style}>{props.children}</div>
    )
};

content.propTypes = {
    children: PropTypes.node
}
export default content;

