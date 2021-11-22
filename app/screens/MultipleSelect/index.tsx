import AnimatedScreenTransition from '../../components/AnimatedScreenTransition';
import MultiSelect from '../../components/MultiSelect';
import React from 'react';
import { SafeAreaView } from 'react-native';
import selectMockData from './selectMockData';
import useMultiSelect from '../../hooks/useMultiSelect';

export default function MultipleSelect () {
  const { getIsActiveState, handlePress } = useMultiSelect();

  return (
    <AnimatedScreenTransition>
      <MultiSelect
        getIsActiveState={getIsActiveState}
        handlePress={handlePress}
        selections={selectMockData}
      />
    </AnimatedScreenTransition>
  );
}
