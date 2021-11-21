import { Animated, Pressable, StyleSheet } from 'react-native';

import React from 'react';
import theme from '../../theme';
import useAnimatedText from '../../hooks/useAnimatedText';

type ThandlePress = ({ item, title }: {item: string; title: string;}) => void

interface IPressableListItem {
  handlePress: ThandlePress;
  style: object;
  item: string;
  title: string;
}

export default function PressableListItem ({
  handlePress,
  style,
  item,
  title,
}: IPressableListItem) {
  const {
    handlePressIn,
    handlePressOut,
    translation,
    color,
    pressed
  } =  useAnimatedText({
    initColor: theme.palette.lightBlack.main,
    pressedColor: theme.palette.lightGray.darker,
    initialAnimationValue: 1,
    pressedInTranslationValue: 5,
  });

  return (
    <Pressable
      style={[styles.root, pressed && styles.pressedBackground]}
      onPress={() => handlePress({ item, title })}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.Text style={[
        style,
        {
          color,
          transform: [{
            translateX: translation
          }]
        }
      ]}
      >
        {item}
      </Animated.Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  root: {
    marginTop: theme.spacing(0.5),
    borderRadius: theme.radius(1),
  },
  pressedBackground: {
    backgroundColor: theme.palette.lightGray.main,
  }
});
