import { SafeAreaView, StyleProp, StyleSheet, ViewStyle } from 'react-native';

import Constants from 'expo-constants';
import React from 'react';
import theme from '../../theme';

interface IScreen {
  children: React.ReactNode|React.ReactNode[]
  style?: StyleProp<ViewStyle>
}

export default function Screen ({
  children,
  style
}: IScreen
) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: theme.palette.white.darker,
    fontFamily: 'sans-serif',
  }
});
