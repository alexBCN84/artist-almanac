import * as actionTypes from '../actions';

const initialState = {
    artists: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ARTIST:
            return {
                ...state,
                artists: state.artists.concat({
                    profile_name: action.artist.profile.name,
                    profile_id: action.artist.profile.id,
                    profile_image: action.artist.profile.image_url,
                    profile_facebook: action.artist.profile.facebook_page_url,
                    profile_upcoming_event_count: action.artist.profile.upcoming_event_count,
                    events: action.artist.events
                })
            }
    }
    return state
}
export default reducer;