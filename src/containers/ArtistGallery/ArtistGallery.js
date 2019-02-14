import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import { selectProps } from '../../helpers';
import ArtistCard from '../../components/ArtistCard/ArtistCard';
import EventCard from '../../components/EventCard/EventCard';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import EventsGallery from '../../components/EventsGallery/EventsGallery';
import { Grid, Row, Col } from '../../components/UI/Grid/Grid';
import PropTypes from 'prop-types';
import Modal from '../../components/UI/Modal/Modal';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import Aux from '../../hoc/Aux';
export class ArtistGallery extends Component {
	state = {
		modalIsOpen: false
	}

	showModal = () => {
		this.setState({ modalIsOpen: true });
	}

	closeModal = () => {
		this.setState({ modalIsOpen: false });
	}

	render() {
		const buttonStyles = {
			width: "100%",
			padding: 7,
			lineHeight: "1.4em",
			fontSize: ".8em",
			color: "#fff",
			fontWeight: 800,
			textAlign: "center",
			borderRadius: 4,
			border: "1px solid #000",
			width: "80%"
		}

		const noEventsBoxStyle = {
			width: "100%",
			padding: 7,
			backgroundColor: "#1B1C1C",
			lineHeight: "1.4em",
			fontSize: ".8em",
			color: "#fff",
			textAlign: "center",
			borderRadius: 4,
			border: "1px solid #000"
		}


		const removeButtonStyles = {
			...buttonStyles,
			backgroundColor: "#E55451",
			border: "1px solid #E55451",
		}

		const seeEventsButtonStyles = {
			...buttonStyles,
			margin: 20,
			backgroundColor: "#57B3B1",
			border: "1px solid #57B3B1",
			textTransform: "uppercase"
		}

		const displayEvents = artist => {

			const events = artist.events;
			if (events.length === 0) return (
				<Col mobile={8}>
					<p style={noEventsBoxStyle}>
						There are no upcoming events for {artist.profile_name}
					</p>
				</Col>);
			return events.slice(0, 2).map(event => <Col mobile={5} key={event.id}><EventCard {...event} /></Col>)
		}
		return (
			<Aux>
				<Modal show={this.state.modalIsOpen} closed={this.closeModal} />
				<Backdrop show={this.state.modalIsOpen} />
				<Grid>
					<Row>

						{this.props.storedArtists.map(artist =>
							<Col mobile={12} phablet={6} tablet={5} desktop={3} key={artist.id}>
								<ArtistCard >
									<ProfileCard {...selectProps(artist, ['profile_facebook', 'profile_id', 'profile_image', 'profile_name', 'profile_upcoming_event_count'])} />
									<EventsGallery>
										<Grid gutters={10}>
											<Row>
												{displayEvents(artist)}
											</Row>
										</Grid>
										{(artist.events.length >= 2) && <button onClick={this.showModal} style={seeEventsButtonStyles}>See all the events</button>}
									</EventsGallery>
								</ArtistCard>
								<button style={removeButtonStyles} onClick={() => this.props.onRemoveArtist(artist.id)}>{`Remove ${artist.profile_name}`}</button>
							</Col>)
						}
					</Row>
				</Grid>
			</Aux>
		)
	}
}



ArtistGallery.propTypes = {
	storedArtists: PropTypes.arrayOf(PropTypes.object).isRequired,
	onRemoveArtists: PropTypes.func
}

const mapStateToProps = state => {
	return {
		storedArtists: state.artists
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onRemoveArtist: (id) => dispatch({ type: actionTypes.REMOVE_ARTIST, artistId: id })
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(ArtistGallery);
