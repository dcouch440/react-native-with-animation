import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDimensions } from '@react-native-community/hooks';
import React, { useRef, useState } from 'react';
import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';
import colors from '../../config';
import NavbarLink from '../NavbarLink';

export default function Navbar () {
  const [show, setShow] = useState<boolean>(false);
  const { width } = useDimensions().screen;
  const translation = useRef<Animated.Value>(new Animated.Value(width)).current;
  const showMenuProperty = show ? 'flex' : 'none';

  const handlePress = () => {
    if (!show) {
      Animated.timing(translation, {
        toValue: 0,
        useNativeDriver: true
      }).start();
    } else {
      Animated.timing(translation, {
        toValue: width,
        useNativeDriver: true
      }).start();
    }
    setShow(prev => !prev);
  };

  return (
    <View style={styles.navbar}>
      <View style={styles.topBar}>
        <TouchableOpacity
          onPress={handlePress}
        >
          <MaterialCommunityIcons
            color='#8b8b8b'
            name='menu'
            size={32}
          />
        </TouchableOpacity>
      </View>
      <Animated.View
        style={[
          { translateX: translation },
          styles.drawer,
          { display: showMenuProperty }
        ]}
      >
        <NavbarLink
          text='Home'
          to='/'
        />
        <NavbarLink
          text='About'
          to='/about'
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  drawer: {
    overflow: 'hidden'
  },
  navbar: {
    backgroundColor: colors.navbar,
    flexDirection: 'column',
    padding: 3,
    justifyContent: 'center'
  },
  topBar: {
    height: 35,
    flexDirection: 'row-reverse',
    paddingLeft: 5
  }
});
