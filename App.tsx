import { NativeRouter, Route } from 'react-router-native';

import About from './app/screens/About';
import Home from './app/screens/Home';
import Navbar from './app/components/Navbar';
import React from 'react';
import Screen from './app/components/Screen';
import Sections from './app/screens/Sections';
import { StyleSheet } from 'react-native';

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
      </Screen>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({

});
