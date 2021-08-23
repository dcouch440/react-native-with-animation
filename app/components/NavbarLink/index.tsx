import React, { useRef, useState } from 'react';
import { Animated, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';
import colors from '../../config';

type VoidFunction = () => void

interface Props {
  to: string
  text: string
}

export default function NavbarLink ({
  to,
  text
}: Props
) {
  const [color, setColor] = useState<string>('#FFF');
  const translation = useRef<Animated.Value>(new Animated.Value(1)).current;

  const handlePressIn: VoidFunction = () => {
    setColor(colors.buttonTextPress);
    Animated.spring(translation, {
      toValue: 1.01,
      useNativeDriver: true
    }).start();
  };

  const handlePressOut: VoidFunction = () => {
    setColor(colors.buttonText);
    Animated.spring(translation, {
      toValue: 1,
      useNativeDriver: true
    }).start();
  };

  return (
    <TouchableOpacity >
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
    padding: 15,
    flexDirection: 'row-reverse',
    borderRadius: 10
  }
});
