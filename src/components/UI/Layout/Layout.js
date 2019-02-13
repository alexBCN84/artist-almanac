import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer';
const layout = props => {
    const style = { backgroundColor: '#F2F3F5', ...props.style }
    return (
        <div style={style}>
            {props.children}
            <Footer />
        </div>
    )
};

layout.propTypes = {
    children: PropTypes.node
}
export default layout;