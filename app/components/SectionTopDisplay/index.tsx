import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';
import theme from '../../theme';

interface ISectionTopDisplay {
  selected: {
    title: string;
    currentSelection: string;
    url: string;
  }
}

export default function SectionTopDisplay ({ selected: { title, currentSelection, url } }: ISectionTopDisplay) {
  return (
    <ImageBackground
      source={{ uri: url }}
      style={styles.root}
    >
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.currentSelection}>{currentSelection}</Text>
      </View>
      <TouchableOpacity
        activeOpacity={.8}
        style={styles.makeSelection}
        onPress={() => {}}
      >
        <Text style={styles.makeSelectionText}>Make your selection</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  root: {
    height: 300,
    backgroundColor: theme.palette.primary.main,
    justifyContent: 'space-between',
    borderRadius: theme.radius(1),
    marginTop: theme.spacing(1),
    padding: theme.spacing(2),
    overflow: 'hidden',
  },
  makeSelection: {
    backgroundColor: theme.palette.honeyYellow.main,
    padding: theme.spacing(1),
    borderRadius: theme.radius(1),
  },
  makeSelectionText: {
    textAlign: 'center',
    color: theme.palette.lightBlack.main,
    fontSize: theme.typography.fontSize.lg,
  },
  title: {
    backgroundColor: theme.palette.lightBlack.transparent,
    padding: theme.spacing(1),
    color: theme.palette.white.main,
    fontSize: theme.typography.fontSize.lg,
    borderTopLeftRadius: theme.radius(1),
    borderTopRightRadius: theme.radius(1),
    borderBottomRightRadius: theme.radius(1),
    fontWeight: 'bold',
  },
  currentSelection: {
    padding: theme.spacing(0.5),
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    color: theme.palette.lightBlack.main,
    fontWeight: 'bold',
    fontSize: theme.typography.fontSize.md,
    borderBottomLeftRadius: theme.radius(0.5),
    borderBottomRightRadius: theme.radius(0.5),
    backgroundColor: theme.palette.honeyYellow.main,
    alignSelf: 'flex-start',
  }
});
