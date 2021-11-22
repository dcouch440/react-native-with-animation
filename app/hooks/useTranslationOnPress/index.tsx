import { useRef, useState } from 'react';

import { Animated, } from 'react-native';

type VoidFunction = () => void

export interface IUseTranslationOnPress {
  initColor?: string;
  pressedColor?: string;
  initialAnimationValue: number;
  pressedInTranslationValue?: number;
  pressedOutTranslationValue?: number;
  pressOnly?: boolean
}

/**
 * @param {string} initColor - The color that is the un pressed value.
 * @param {string} pressedColor - The color that is returned when the press is active.
 * @param {number} pressedInTranslationValue - The value that will ease to during activation.
 * @param {number} pressedOutTranslationValue - Optional the value that will be returned to after the activation ends.
 * @param {number} initialAnimationValue - The start value for the translation.
 * @param {boolean} pressOnly - If color state, pressed state, are not required, use pressOnly: true.
*/

export default function useTranslationOnPress ({
  initColor = '#000000',
  pressedColor = '#000000',
  pressedInTranslationValue,
  pressedOutTranslationValue,
  initialAnimationValue,
  pressOnly = false,
}: IUseTranslationOnPress
) {
  const [color, setColor] = useState<string>(initColor);
  const [pressed, setPressed] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const translation = useRef<Animated.Value>(new Animated.Value(initialAnimationValue)).current;

  const handlePressIn: VoidFunction = () => {
    if (!pressOnly) {
      setColor(pressedColor);
      setPressed(true);
    }

    Animated.spring(translation, {
      toValue: pressedInTranslationValue ?? initialAnimationValue,
      useNativeDriver: true
    }).start();
  };

  const handlePressOut: VoidFunction = () => {
    if (!pressOnly) {
      setColor(initColor);
      setPressed(false);
    }

    Animated.spring(translation, {
      toValue: pressedOutTranslationValue ?? initialAnimationValue,
      useNativeDriver: true
    }).start();
  };

  /**
   * @description handlePress is used for toggle with translation.
   */

  const handlePress = () => {
    if (toggle) {
      handlePressIn();
    } else {
      handlePressOut();
    }
    setToggle(prev => !prev);
  };

  return {
    translation,
    handlePressIn,
    handlePressOut,
    color,
    pressed,
    handlePress,
    toggle,
  };
}
