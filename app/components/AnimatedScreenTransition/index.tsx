import React, { useEffect, useRef } from 'react';
import { Animated, StyleProp, ViewStyle } from 'react-native';

interface Props {
  children: React.ReactNode|React.ReactNode[]
  style?: StyleProp<ViewStyle>
}

export default function AnimatedScreenTransition ({
  children,
  style
}: Props) {
  const translation = useRef<Animated.Value>(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translation, {
      toValue: 1,
      useNativeDriver: true
    }).start();
  }, [translation]);

  return (
    <Animated.View
      style={[{ opacity:  translation, flex: 1 }, style]}
    >
      {children}
    </Animated.View>
  );
}
