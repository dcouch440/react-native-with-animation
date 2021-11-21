import { Animated, Pressable, StyleSheet } from 'react-native';

import React from 'react';
import theme from '../../theme';
import useAnimatedText from '../../hooks/useAnimatedText';

type ThandlePress = (
  { item, title, url: string }:
  { item: string; title: string; url: string}
) => void

interface IPressableListItem {
  handlePress: ThandlePress;
  style: object;
  item: string;
  section: {
    title: string;
    url: string;
  };
}

export default function PressableListItem ({
  handlePress,
  style,
  item,
  section: { title, url }
}: IPressableListItem
) {
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
    pressedInTranslationValue: 2,
  });

  return (
    <Pressable
      style={[styles.root, pressed && styles.pressedBackground]}
      onPress={() => handlePress({ item, title, url })}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.Text style={[
        style,
        {
          color,
          transform: [{ translateX: translation }],
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
