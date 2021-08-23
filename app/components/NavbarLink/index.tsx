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
  const translation = useRef<Animated.Value>(new Animated.Value(0)).current

  const handlePressIn: VoidFunction = () => {
    setColor(colors.buttonTextPress)
    Animated.spring(translation, {
      toValue: -5,
      useNativeDriver: true
    }).start()
  }

  const handlePressOut: VoidFunction = () => {
    setColor(colors.buttonText)
    Animated.spring(translation, {
      toValue: 0,
      useNativeDriver: true
    }).start()
  }

  return (
    <TouchableOpacity
    >
      <Link
        style={styles.link}
        to={to}
        underlayColor="#353b41"
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Animated.Text style={[
          styles.text, {
            color: color,
            transform: [{
              translateX: translation
            }]
          }
        ]}>{text}</Animated.Text>
      </Link>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  link: {
    padding: 15,
    flexDirection: 'row-reverse',
    borderRadius: 10
  },
  text: {
    fontSize: 23,
  }
})
