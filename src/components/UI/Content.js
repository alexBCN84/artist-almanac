import React from 'react';

const content = props => {
    const style = {
        ...props.style
    }
    return (
        <div style={style}>{props.children}</div>
    )
};

export default content;

