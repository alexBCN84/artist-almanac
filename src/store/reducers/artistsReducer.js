import * as actionTypes from '../actions';
import {
    v4
} from 'node-uuid';
const initialState = {
    artists: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ARTIST:
            return {
                ...state,
                artists: state.artists.concat({
                    id: v4(),
                    profile_name: action.artist.profile.name,
                    profile_id: action.artist.profile.id,
                    profile_image: action.artist.profile.image_url,
                    profile_facebook: action.artist.profile.facebook_page_url,
                    profile_upcoming_event_count: action.artist.profile.upcoming_event_count,
                    events: action.artist.events
                })
            }
        case actionTypes.REMOVE_ARTIST:
            const updatedArray = state.artists.filter(artist => artist.id !== action.artistId)
            return { ...state, artists: updatedArray }

    }
    return state
}
export default reducer;