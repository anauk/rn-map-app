import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import ReduxThunk from 'redux-thunk'

import PlacesNavigator from "./navigation/PlacesNavigator";
import placeReducer from './store/places-reducer'
import { init } from './helpers/db'

init().then(() => {
  console.log('INITIALIZED database')
}).catch(err => {
  console.log('Initialized db failed.')
  console.log(err)
})

const rootReducer = combineReducers({
  places: placeReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigator/>
    </Provider>
  );
}

