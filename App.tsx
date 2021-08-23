import React from 'react'
import { StyleSheet } from 'react-native'
import { NativeRouter, Route } from 'react-router-native'
import Navbar from './app/components/Navbar'
import Screen from './app/components/Screen'
import About from './app/screens/About'
import Home from './app/screens/Home'

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
      </Screen>
    </NativeRouter>
  )
}

const styles = StyleSheet.create({

})
