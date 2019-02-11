import React from 'react';

const footer = props => {
    const style = {
        backgroundColor: '#1B1C1C',
        minHeight: 100,
        padding: '10px 20%',
        borderTop: '1px solid #DDDDDD',
        color: '#fff',
        fontFamily: "'Major Mono Display', monospace",
        ...props.style
    }
    return (
        <footer style={style}>Alejandro Gines Martinez</footer>
    )
};

export default footer