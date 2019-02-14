import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';
import './Modal.css';
import EventsGallery from '../../EventsGallery/EventsGallery';
import { Grid, Row, Col } from '../Grid/Grid';
import EventCard from '../../EventCard/EventCard';
const modal = props => {
    const dismissButton = {
        position: "absolute",
        top: 0,
        left: 0,
        padding: 7,
        lineHeight: "1.4em",
        fontSize: ".8em",
        color: "#fff",
        fontWeight: 800,
        textAlign: "center",
        boxShadow: "0 3px 15px 0 rgba(0,0,0,.09)",
        backgroundColor: "#57B3B1",
        fontSize: 10
    }
    return (
        <div className={'Modal ModalOpen'}>
            <EventsGallery style={{ position: "relative" }}>
                <Grid gutters={10}>
                    <Row>
                        {props.events.map(event => <Col mobile={12} phablet={5} tablet={3} key={event.id}><EventCard style={{ height: "auto" }} {...event} /></Col>)}
                    </Row>
                </Grid>

            </EventsGallery>

            <button style={dismissButton} onClick={props.onRemoveArtistFromModal}> X</button>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onRemoveArtistFromModal: () => dispatch({ type: actionTypes.REMOVE_ARTIST_FROM_MODAL })
    }
}
export default connect(null, mapDispatchToProps)(modal);

