import React from 'react';
import Radium from 'radium';
const container = props => {
    const style = {
        position: 'relative',
        width: '90%',
        margin: '5%',
        padding: 10,
        ...props.style
    };

    return (
        <div style={style}> {props.children}</div>
    )
}

export default Radium(container);