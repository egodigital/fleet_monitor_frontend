import styles from './styles';
import React, { Component } from 'react';
import { Text } from 'react-native-elements';
import { View } from 'react-native';

// import { VehiclesApi } from '../../api/ego_backend';

class SettingsScreen extends Component {

  render() {
    // var vehiclesApi = new VehiclesApi();
    // var response = vehiclesApi.apiV2VehiclesGet("07fb13b8-176a-4c9d-bfe6-9831271e3fac");
    var response = {text:"test"};
    return (
      <View style={styles.container}>
        <Text>{response.text}</Text>
      </View>
    );
  }
}

export default SettingsScreen;
