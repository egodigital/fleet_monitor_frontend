import styles from './styles';
import React, { Component } from 'react';
import { Text } from 'react-native-elements';
import { View } from 'react-native';

class SettingsScreen extends Component {


  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Settings Screen.</Text>
      </View>
    );
  }
}

export default SettingsScreen;
