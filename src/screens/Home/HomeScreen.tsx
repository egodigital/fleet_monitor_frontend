import styles from './styles';
import React, { Component, } from 'react';
import { Platform, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 51.77840976710607,
      longitude: 6.091277420666013,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    };
  }

  componentDidMount() {
    Platform.select({
      ios: () => { },
      default: (component) => navigator.geolocation.watchPosition(
        (position) => {
          const region = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          };
          component.map.animateToRegion(region, 2000);
          console.log(this.marker);
          this.setState(region);
        },
        (error) => { console.error(error.message) },
        { enableHighAccuracy: false, timeout: 30000, maximumAge: 1000 },
      ),
    })(this)
    
  }


  render() {
    return (
      <View style={styles.container}>
        <MapView
          initialRegion={this.state}
          ref={(map) => {this.map = map}}
          style={styles.map}
          followsUserLocation={true}
          showsUserLocation={true}
          loadingEnabled={true}
        >
          <MapView.Marker
            coordinate={this.state}
            ref={(marker) => { this.marker = marker }} />
        </MapView>
      </View>
    );
  }
}

export default HomeScreen;
