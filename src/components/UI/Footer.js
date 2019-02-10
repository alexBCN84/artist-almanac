import React from 'react';

const footer = props => {
    const style = {
        backgroundColor: '#1B1C1C',
        width: '100%',
        minHeight: 100,
        padding: '10px 20%',
        borderTop: '1px solid #DDDDDD',
        color: '#fff',
        ...props.style
    }
    return (
        <footer style={style}>Alejandro Gines Martinez</footer>
    )
};

export default footer