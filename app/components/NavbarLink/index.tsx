import { Animated, StyleSheet, TouchableOpacity } from 'react-native';

import { Link } from 'react-router-native';
import React from 'react';
import theme from '../../theme';
import useTranslationOnPress from '../../hooks/useTranslationOnPress';

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
  } =  useTranslationOnPress({
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
        underlayColor={theme.palette.lightBlack.lighter}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Animated.Text style={[
          styles.text,
          {
            color,
            transform: [{ scale: translation }],
          }
        ]}
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
    borderRadius: theme.radius(1),
  },
  text: {
    textShadowColor: theme.palette.transparentWhite.main,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: theme.radius(1),
    fontSize: theme.typography.fontSize.lg,
  }
});
