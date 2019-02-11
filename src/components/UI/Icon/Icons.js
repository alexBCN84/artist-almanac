import React from 'react';
import PropTypes from 'proptypes';
import { ICONS } from './pathConstants';
export const Icon = props => {
    const styles = {
        svg: {
            display: 'inline-block',
            verticalAlign: 'middle',
            ...props.style

        },
        path: {
            fill: props.color,
        },
    };

    return (
        <svg
            style={styles.svg}
            width={`${props.size}px`}
            height={`${props.size}px`}
            viewBox="0 0 1024 1024"

        >
            <path
                style={styles.path}
                d={props.icon}
            ></path>
        </svg>
    );
};

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    size: PropTypes.number,
    color: PropTypes.string,
};

Icon.defaultProps = {
    size: 16,
};

export const FacebookIcon = props => {
    return (
        <a style={{ ...props.style }} href={props.href}>
            <Icon icon={ICONS.FACEBOOK} color="#fff" size={30} style={{ backgroundColor: '#3C5B96', borderRadius: 3 }} />
        </a>
    )
};

