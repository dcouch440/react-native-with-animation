import { Animated, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import React, { useEffect, useRef } from 'react';

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
      style={[{ opacity: translation }, styles.root, style]}
    >
      {children}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  }
});
