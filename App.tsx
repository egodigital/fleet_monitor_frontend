import Navigator from './src/screens/Navigator';
import React, { Component } from 'react';
import Orientation, { orientation } from 'react-native-orientation';

import { AppearanceProvider, useColorScheme, Appearance } from 'react-native-appearance';
import { View, Button } from 'react-native';
import { Text } from 'react-native-elements';

export default () => {
  let colorScheme = useColorScheme();

  return (
    <AppearanceProvider>
      <Navigator theme={colorScheme} />
    </AppearanceProvider>)
}
