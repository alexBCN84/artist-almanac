import React from 'react';
import { Grid, Row, Col } from '../UI/Grid/Grid';

const footer = props => {
    const style = {
        backgroundColor: '#2D2D2D',
        heigt: "20vh",
        minHeight: 50,
        padding: '20px 20%',
        borderTop: '1px solid #DDDDDD',
        color: '#fff',
        fontFamily: "'Merriweather', serif",
        ...props.style
    }

    const brandsintownButton = {
        textDecoration: "none",
        color: "#2D2D2D",
        marginLeft: 40,
        letterSpacing: 1.5,
        padding: 10,
        backgroundColor: "#fff",
        border: "1px solid rgba(34,36,38,.15)",
        boxShadow: "0 1px 2px 0 rgba(34,36,38,.15)",
        borderRadius: 5
    }
    return (
        <footer style={style}>
            <Grid>
                <Row>
                    <Col mobile={12}>
                        <p>to find more about popular events in your city visit</p>
                    </Col>
                    <Col mobile={12}>
                        <a style={brandsintownButton} href="https://www.bandsintown.com/">
                            <strong>Brandsintown</strong>
                        </a>
                    </Col>
                </Row>
            </Grid>
        </footer>
    )
};

export default footer