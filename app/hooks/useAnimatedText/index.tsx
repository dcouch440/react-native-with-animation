import { useRef, useState } from 'react';

import { Animated, } from 'react-native';

type VoidFunction = () => void

export interface IUseAnimatedText {
  initColor: string;
  pressedColor: string;
  initialAnimationValue: number;
  pressedInTranslationValue: number;
  pressedOutTranslationValue?: number;
}

export default function useAnimatedText ({
  initColor,
  pressedColor,
  pressedInTranslationValue,
  pressedOutTranslationValue,
  initialAnimationValue,
}: IUseAnimatedText
) {
  const [color, setColor] = useState<string>(initColor);
  const [pressed, setPressed] = useState<boolean>(false);
  const translation = useRef<Animated.Value>(new Animated.Value(initialAnimationValue)).current;

  const handlePressIn: VoidFunction = () => {
    setColor(pressedColor);
    setPressed(true);
    Animated.spring(translation, {
      toValue: pressedInTranslationValue,
      useNativeDriver: true
    }).start();
  };

  const handlePressOut: VoidFunction = () => {
    setColor(initColor);
    setPressed(false);
    Animated.spring(translation, {
      toValue: pressedOutTranslationValue ?? initialAnimationValue,
      useNativeDriver: true
    }).start();
  };

  return { translation, handlePressIn, handlePressOut, color, pressed };
}
