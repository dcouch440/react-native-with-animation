import React, { useRef, useState } from 'react';
import { Animated, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';
import colors from '../../config';

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
  const translation = useRef(new Animated.Value(0)).current

  const handlePressIn = () => {
    setColor(colors.activeText)
    Animated.spring(translation, {
      toValue: -5,
      useNativeDriver: true
    }).start()
  }
  const handlePressOut = () => {
    setColor(colors.neutralText)
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
        underlayColor="#ffffff"
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