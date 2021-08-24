import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDimensions } from '@react-native-community/hooks';
import React, { useRef, useState } from 'react';
import { Animated, LayoutAnimation, Platform, StyleSheet, TouchableOpacity, UIManager, View } from 'react-native';
import colors from '../../config/colors';
import NavbarLink from '../NavbarLink';

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
    backgroundColor: colors.navbar,
    flexDirection: 'column',
    padding: 3,
    justifyContent: 'center',
  },
  topBar: {
    height: 35,
    flexDirection: 'row-reverse',
    paddingLeft: 5
  }
});
