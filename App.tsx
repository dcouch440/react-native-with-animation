import { NativeRouter, Route } from 'react-router-native';

import About from './app/screens/About';
import Home from './app/screens/Home';
import MultipleSelect from './app/screens/MultipleSelect';
import Navbar from './app/components/Navbar';
import React from 'react';
import Screen from './app/components/Screen';
import Sections from './app/screens/Sections';

export default function App () {
  return (
    <NativeRouter>
      <Screen>
        <Navbar />
        <Route
          exact
          component={Home}
          path='/'
        />
        <Route
          exact
          component={About}
          path='/about'
        />
        <Route
          exact
          component={Sections}
          path='/sections'
        />
        <Route
          exact
          component={MultipleSelect}
          path='/multi-select'
        />
      </Screen>
    </NativeRouter>
  );
}
