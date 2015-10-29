import { compose, createStore } from 'redux';
import _ from 'lodash';

import mapApp from './reducers/allReducers';
import initialState from './constants/initialState';
import { LOCAL_STORAGE_KEY } from './constants/settings';

import persistState from 'redux-localstorage';

const createPersistentStore = compose(
    persistState([], {
        key: LOCAL_STORAGE_KEY
    })
)(createStore);

const store = createPersistentStore(mapApp, initialState);

export default store;