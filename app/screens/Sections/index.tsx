import { Animated, Pressable, SafeAreaView, SectionList, StyleSheet, Text, View } from 'react-native';
import React, { useRef, useState } from 'react';

import PressableListItem from '../../components/PressableListItem';
import { SECTIONS } from './sectionsMockData';
import SectionTopDisplay from '../../components/SectionTopDisplay';
import theme from '../../theme';

interface ITitle {
  section: {
    title: string;
  }
}

interface IRenderItem {
  item: string;
  section: {title: string;}
}

interface IhandlePress {
  item: string;
  title: string;
}

export default function Sections () {
  const [currentSelection, setCurrentSelection] = useState<{title: string; currentSelection: string;}>({
    title: SECTIONS[0].title,
    currentSelection: SECTIONS[0].data[0],
  });

  const handlePress = ({ item, title }: IhandlePress) => {
    setCurrentSelection({
      title,
      currentSelection: item
    });
  };

  const renderHeader = ({ section: { title } }: ITitle) => (
    <Text style={styles.title}>{title}</Text>
  );

  const renderItem = ({ item, section: { title } }: IRenderItem ) => (
    <PressableListItem
      handlePress={handlePress}
      item={item}
      style={styles.data}
      title={title}
    />
  );

  return (
    <SafeAreaView style={styles.root}>
      <SectionTopDisplay selected={currentSelection} />
      <SectionList
        keyExtractor={item => item}
        renderItem={renderItem}
        renderSectionHeader={renderHeader}
        sections={SECTIONS}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  title: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    fontSize: theme.typography.fontSize.lg,
    color: theme.palette.lightBlack.main,
    backgroundColor: theme.palette.honeyYellow.main,
    borderRadius: theme.radius(1),
    marginTop: theme.spacing(1),
  },
  data: {
    paddingLeft: theme.spacing(2),
    borderBottomColor: theme.palette.lightGray.main,
    borderBottomWidth: 1,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
});
