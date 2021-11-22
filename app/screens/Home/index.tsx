import { StyleSheet, View } from 'react-native';
import dataMockEntries, { IDataMockEntries } from './dataMockEntries';

import AnimatedScreenTransition from '../../components/AnimatedScreenTransition';
import AppText from '../../components/AppText';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import Swiper from 'react-native-swiper';
import theme from '../../theme';

export default function Home () {

  const pages = () => dataMockEntries.map(({
    label,
    value,
    country,
    updated
  }: IDataMockEntries, i: number) => (
    <View
      key={i}
      style={styles.slideLayout}
    >
      <MaterialCommunityIcons
        name='hospital'
        size={250}
      />
      <AppText
        text={`${label}: ${value}`}
      />
      <AppText
        text={country}
      />
      <AppText
        text={updated}
      />
    </View>
  ));

  return (
    <AnimatedScreenTransition
      style={styles.container}
    >
      <Swiper showsButtons={false}>
        {pages()}
      </Swiper>
    </AnimatedScreenTransition>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slideLayout: {
    flex: 1,
    alignItems: 'center',
    marginTop: theme.spacing(12),
  },
});
