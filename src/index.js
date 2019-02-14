import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import artistReducer from './store/reducers/artistsReducer';
import modalReducer from './store/reducers/modalReducer';
import WebFont from 'webfontloader';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';
WebFont.load({
    google: {
        families: ['Major Mono Display', 'cursive', 'PT Sans', 'sans-serif', 'Comfortaa', 'Rajdhani', 'Merriweather', 'Raleway', 'Abel']
    }
});
const rootReducer = combineReducers({
    art: artistReducer,
    mod: modalReducer
});

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

store.subscribe(throttle(() => {
    saveState(store.getState());
}, 1000));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
