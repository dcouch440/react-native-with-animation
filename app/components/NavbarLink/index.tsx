import { Animated, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';

import { Link } from 'react-router-native';
import theme from '../../theme';
import useAnimatedText from '../../hooks/useAnimatedText';

interface Props {
  to: string
  text: string
}

export default function NavbarLink ({
  to,
  text
}: Props
) {
  const {
    handlePressIn,
    handlePressOut,
    translation,
    color
  } =  useAnimatedText({
    initColor: theme.palette.white.main,
    pressedColor: theme.palette.white.darker,
    initialAnimationValue: 1,
    pressedInTranslationValue: 1.05,
  });

  return (
    <TouchableOpacity>
      <Link
        style={styles.link}
        to={to}
        underlayColor="#353b41"
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Animated.Text style={{
          color: color,
          fontSize: 23,
          transform: [{ scale: translation }],
          textShadowColor: 'rgba(255, 255, 255, 0.404)',
          textShadowOffset: { width: -1, height: 1 },
          textShadowRadius: 10
        }}
        >
          {text}
        </Animated.Text>
      </Link>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  link: {
    padding: theme.spacing(1),
    flexDirection: 'row-reverse',
    borderRadius: 10
  }
});
