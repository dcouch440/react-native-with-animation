import { Animated, LayoutAnimation, Platform, StyleSheet, TouchableOpacity, UIManager, View } from 'react-native';
import React, { useRef, useState } from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import NavbarLink from '../NavbarLink';
import theme from '../../theme';
import { useDimensions } from '@react-native-community/hooks';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function Navbar () {
  const [show, setShow] = useState<boolean>(false);
  const { width } = useDimensions().screen;
  const translation = useRef<Animated.Value>(new Animated.Value(width)).current;

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
          onPress={() => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            handlePress();
          }}
        >
          <MaterialCommunityIcons
            color='#8b8b8b'
            name='menu'
            size={36}
          />
        </TouchableOpacity>
      </View>
      {
        show && (
          <Animated.View
            style={[
              { translateX: translation },
              styles.drawer,
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
            <NavbarLink
              text='Sections'
              to='/sections'
            />
            <NavbarLink
              text='Multi Select'
              to='/multi-select'
            />
          </Animated.View>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  drawer: {
    overflow: 'hidden'
  },
  navbar: {
    backgroundColor: theme.palette.lightBlack.main,
    flexDirection: 'column',
    padding: 3,
    justifyContent: 'center',
  },
  topBar: {
    height: theme.spacing(4),
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingLeft: theme.spacing(.5),
  }
});
