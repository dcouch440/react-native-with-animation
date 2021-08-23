import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Text } from 'react-native';
import AnimatedScreenTransition from '../../components/AnimatedScreenTransition';

interface IDATA {
  label: string;
  value: string;
  updated: string;
  country: string;
  id: number

}

export default function Home () {

  const DATA: IDATA = {
    label: 'Covid Cases',
    value: '+3500',
    country: 'USA',
    updated: '8/23/2021',
    id: 1,
  };

  const DataEntry = ({ label, value, country, updated }: {
    label: string;
    value: string;
    updated: string;
    country: string;
  }) => (
    <>
      <Text>{label}: {value}</Text>
      <Text>{country}</Text>
      <Text>{updated}</Text>
    </>
  );

  return (
    <AnimatedScreenTransition
      style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
    >
      <MaterialCommunityIcons
        color='black'
        name='hospital'
        size={250}
      />
      <DataEntry
        country={DATA.country}
        label={DATA.label}
        updated={DATA.updated}
        value={DATA.value}
      />
    </AnimatedScreenTransition>
  );
}
