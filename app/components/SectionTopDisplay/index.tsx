import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import theme from '../../theme';

interface ISectionTopDisplay {
  selected: {
    title: string;
    currentSelection: string;
  }
}

export default function SectionTopDisplay ({ selected: { title, currentSelection } }: ISectionTopDisplay) {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.currentSelection}>{currentSelection}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: 300,
    backgroundColor: theme.palette.primary.main,
    justifyContent: 'space-around',
    borderRadius: theme.radius(1),
    marginTop: theme.spacing(1),
    padding: theme.spacing(2),
  },
  title: {
    fontSize: theme.typography.fontSize.lg,
    color: theme.palette.lightBlack.main,
    fontWeight: 'bold',
  },
  currentSelection: {
    fontSize: theme.typography.fontSize.lg,
    color: theme.palette.lightBlack.main,
  }
});
