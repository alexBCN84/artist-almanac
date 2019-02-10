import React from 'react';

const header = props => {
    const style = {
        width: '100%',
        height: 150,
        backgroundColor: '#fff',
        borderBottom: '1px solid #cdcdcd',
        ...props.style
    }
    return (
        <header style={style}>
            <p>The Artist Almanac</p>
            {props.children}
        </header>
    )
}
export default header