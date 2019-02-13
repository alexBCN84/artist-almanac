import React from 'react';
import PropTypes from 'prop-types';
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

export const SearchIcon = props => {
    return (
        <a style={{ ...props.style }} href={props.href}>
            <Icon icon={ICONS.SEARCH} color="#757575" size={30} style={
                {
                    display: "inline-block",
                    width: "1.5em",
                    height: "1.5em",
                    strokeWidth: 0,
                    backgroundColor: "rgba(0, 0, 0, 0)"
                }
            } />
        </a>
    )
};

