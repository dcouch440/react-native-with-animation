import { Animated, LayoutAnimation, Platform, StyleSheet, TouchableOpacity, UIManager, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import NavbarLink from '../NavbarLink';
import React from 'react';
import theme from '../../theme';
import { useDimensions } from '@react-native-community/hooks';
import useTranslationOnPress from '../../hooks/useTranslationOnPress';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function Navbar () {
  const { width } = useDimensions().screen;
  const { handlePress, toggle: show, translation } = useTranslationOnPress({
    initialAnimationValue: width,
    pressedOutTranslationValue: 0,
    pressOnly: true,
  });

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
    overflow: 'hidden',
    paddingBottom: theme.spacing(1),
  },
  navbar: {
    backgroundColor: theme.palette.lightBlack.main,
    justifyContent: 'center',
  },
  topBar: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    padding: theme.spacing(1),
  }
});
