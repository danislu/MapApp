import { compose, createStore, applyMiddleware } from 'redux';

import mapApp from './reducers/allReducers';
import initialState from './constants/initialState';
import { LOCAL_STORAGE_KEY } from './constants/settings';
import persistState from 'redux-localstorage';
import { browserHistory } from 'react-router'
import { syncHistory } from 'redux-simple-router'

const reduxRouterMiddleware = syncHistory(browserHistory)

const createPersistentStore = compose(
    applyMiddleware(reduxRouterMiddleware),
    persistState([], {
        key: LOCAL_STORAGE_KEY
    })
)(createStore);

const store = createPersistentStore(mapApp, initialState);

reduxRouterMiddleware.listenForReplays(store);

export const bh = browserHistory;
export default store;
