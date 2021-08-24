import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import AnimatedScreenTransition from '../../components/AnimatedScreenTransition';

interface IData {
  label: string;
  value: string;
  updated: string;
  country: string;
  id: number

}

export default function Home () {

  const data: IData[] = [
    {
      label: 'Hospital One',
      value: '+3400 Patients A Year',
      country: 'USA',
      updated: '8/23/2021',
      id: 1,
    },
    {
      label: 'Hospital Two',
      value: '+3500 Patients A Year',
      country: 'JAPAN',
      updated: '8/23/2021',
      id: 2,
    },
  ];

  const dataEntry = () => data.map((item: IData, i: number) => (
    <View
      key={i}
      style={styles.slideLayout}
    >
      <MaterialCommunityIcons
        color='black'
        name='hospital'
        size={250}
      />
      <Text>{item.label}: {item.value}</Text>
      <Text>{item.country}</Text>
      <Text>{item.updated}</Text>
    </View>
  ));

  return (
    <AnimatedScreenTransition
      style={styles.container}
    >
      <Swiper showsButtons={false}>
        {dataEntry()}
      </Swiper>
    </AnimatedScreenTransition>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#a7b4a7'
  },
  slideLayout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
