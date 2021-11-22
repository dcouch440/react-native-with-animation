import React, { useState } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

import AnimatedScreenTransition from '../../components/AnimatedScreenTransition';
import PressableListItem from '../../components/PressableListItem';
import SectionTopDisplay from '../../components/SectionTopDisplay';
import sectionMockData from './sectionsMockData';
import theme from '../../theme';

interface ITitle {
  section: {
    title: string;
  }
}

interface IRenderItem {
  item: string;
  section: {title: string; url:string}
}

interface IhandlePress {
  item: string;
  title: string;
  url: string;
}

interface ICurrentSelection {
  title: string;
  currentSelection: string;
  url: string;
}

export default function Sections () {
  const [{ title, data: [firstDataEntry], url }] = sectionMockData;
  const [currentSelection, setCurrentSelection] = useState<ICurrentSelection>({
    title,
    currentSelection: firstDataEntry,
    url,
  });

  const handlePress = ({ item, title, url }: IhandlePress) => {
    setCurrentSelection({
      title,
      currentSelection: item,
      url,
    });
  };

  const renderHeader = ({ section: { title } }: ITitle) => (
    <Text style={styles.listTitle}>{title}</Text>
  );

  const renderItem = ({ item, section }: IRenderItem ) => (
    <PressableListItem
      handlePress={handlePress}
      item={item}
      section={section}
      style={styles.listItem}
    />
  );

  return (
    <AnimatedScreenTransition style={styles.root}>
      <SectionTopDisplay selected={currentSelection} />
      <SectionList
        keyExtractor={item => item}
        renderItem={renderItem}
        renderSectionHeader={renderHeader}
        sections={sectionMockData}
      />
    </AnimatedScreenTransition>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  listTitle: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    fontSize: theme.typography.fontSize.lg,
    color: theme.palette.white.darker,
    backgroundColor: theme.palette.lightBlack.transparent,
    borderRadius: theme.radius(1),
    marginTop: theme.spacing(1),
  },
  listItem: {
    padding: theme.spacing(1),
  },
});
