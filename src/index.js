import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import artistReducer from './store/reducers/artistsReducer';
import WebFont from 'webfontloader';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';
WebFont.load({
    google: {
        families: ['Major Mono Display', 'cursive', 'PT Sans', 'sans-serif', 'Comfortaa', 'Rajdhani', 'Merriweather', 'Raleway', 'Abel']
    }
});

const persistedState = loadState();
const store = createStore(artistReducer, persistedState);
store.subscribe(throttle(() => {
    saveState({ artists: store.getState().artists });
}, 1000));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
