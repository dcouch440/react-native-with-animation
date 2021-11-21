import { SafeAreaView, Text, View } from 'react-native';

import MultiSelect from '../../components/MultiSelect';
import React from 'react';
import selectMockData from './selectMockData';
import useMultiSelect from '../../hooks/useMultiSelect';

export default function MultipleSelect () {
  const { active, handlePress } = useMultiSelect();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MultiSelect
        activeSelections={active}
        handlePress={handlePress}
        selections={selectMockData}
      />
    </SafeAreaView>
  );
}
