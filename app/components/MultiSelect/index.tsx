import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { ISelectMockData } from '../../screens/MultipleSelect/selectMockData';
import { IUseMultiHandlePress } from '../../hooks/useMultiSelect';
import React from 'react';
import theme from '../../theme';

interface IMultiSelect {
  handlePress: IUseMultiHandlePress
  selections: ISelectMockData[];
  getIsActiveState: (id: number) => boolean;
}

export default function MultiSelect ({
  handlePress,
  selections,
  getIsActiveState,
}: IMultiSelect
) {
  const renderItem = ({ item: { data, id } }: { item: ISelectMockData }) => (
    <TouchableOpacity
      style={[
        styles.selectable,
        getIsActiveState(id)
          ? styles.active
          : styles.inactive,
      ]}
      onPress={() => handlePress({ data, id })}
    >
      <Text style={styles.itemText}>{data}</Text>
    </TouchableOpacity>
  );

  const renderHeader = () => (
    <Text style={styles.header}>Multi-Select</Text>
  );

  return (
    <FlatList
      data={selections}
      keyExtractor={item => String(item.id)}
      ListHeaderComponent={renderHeader}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: theme.typography.fontSize.lg,
    textAlign: 'center',
    marginTop: theme.spacing(1),
  },
  selectable: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    marginBottom: 0,
    borderRadius: theme.radius(1),
  },
  active: {
    backgroundColor: theme.palette.honeyYellow.main,
    color: theme.palette.white.main,
  },
  inactive: {
    backgroundColor: theme.palette.lightGray.main,
  },
  itemText: {
    fontSize: theme.typography.fontSize.md,
  }
});
