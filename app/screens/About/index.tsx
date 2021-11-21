import { StyleSheet, Text } from 'react-native';

import AnimatedScreenTransition from '../../components/AnimatedScreenTransition';
import React from 'react';
import theme from '../../theme';

export default function About (): JSX.Element {
  return (
    <AnimatedScreenTransition
      style={styles.container}
    >
      <Text style={styles.text}>This is a test application</Text>
      <Text style={styles.text}>This application tests React Native's Animation API</Text>
    </AnimatedScreenTransition>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: theme.typography.fontSize.lg,
  }
});
