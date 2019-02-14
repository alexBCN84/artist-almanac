import * as actionTypes from '../actions';
const initialState = {
    events_in_modal: [],
    is_modal_open: false
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ARTIST_TO_MODAL:
            return { ...state, is_modal_open: true, events_in_modal: action.add_artist }
        case actionTypes.REMOVE_ARTIST_FROM_MODAL:
            return { ...state, is_modal_open: false, events_in_modal: [] }
    }

    return state;
};

export default reducer;