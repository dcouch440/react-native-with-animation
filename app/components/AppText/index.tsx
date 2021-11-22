import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import theme from '../../theme';

interface IAppText {
  text: string;
  style?: object;
  color?: string;
}

export default function AppText ({
  text,
  style,
  color,
}: IAppText) {
  return (
    <Text style={[styles.text, { color }, style]}>{text}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: theme.typography.fontSize.reg,
    fontFamily: theme.typography.fontFamily.reg,
  }
});
