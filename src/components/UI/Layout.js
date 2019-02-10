import React from 'react';
import Footer from '../UI/Footer';
const layout = props => {
    const style = { backgroundColor: '#F2F3F5', ...props.style }
    return (
        <div style={style}>
            {props.children}
            <Footer />
        </div>
    )
};

export default layout;