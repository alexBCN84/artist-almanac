import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from '../Grid/Grid';
import breakpoint from '../breakpoints';
import Radium from 'radium';
const header = props => {
    const style = {
        width: "100%",
        zIndex: "2",
        position: "fixed",
        backgroundColor: "#fff",
        borderBottom: "1px solid #cdcdcd",
        [breakpoint.mobile]: {
            height: "200px"
        },
        [breakpoint.tablet]: {
            height: "100px"
        },
        ...props.style,
    }
    const titleStyles = {
        fontFamily: "'Raleway', sans-serif",
        color: "#57B3B1",
        fontWeight: 800,
        marginTop: 10

    }
    return (
        <header style={style}>
            <Grid style={{ width: "90%" }}>
                <Row>
                    <Col mobile={12} tablet={6}>
                        <h1 style={titleStyles}>The Artist Almanac</h1>
                    </Col>
                    <Col mobile={8} tablet={4}>{props.children}</Col>
                </Row>
            </Grid>


        </header>
    )
}

header.propTypes = {
    children: PropTypes.node
}
export default Radium(header)