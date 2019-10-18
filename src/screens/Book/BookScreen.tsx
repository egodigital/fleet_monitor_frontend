import styles from './styles';
import React, { Component } from 'react';
import { View, Platform, TextInput } from 'react-native';

import { Button, Icon, Text, Card, PricingCard } from 'react-native-elements';
import DatePicker from 'react-native-datepicker'
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

class BookScreen extends Component {
  map = undefined;
  marker = undefined;
  state = {
    startDate: {
      date: new Date(),
      minDate: new Date(),
      maxDate: new Date(new Date().setDate(new Date().getDate() + 60)), // its crucial, but gets the job done.. limit o 60 days in advance booking
    },
    endDate: {
      date: new Date(new Date().setHours(new Date().getHours() + 2)),
      minDate: new Date(),
      maxDate: new Date(new Date().setDate(new Date().getDate() + 60)),
    },
    location: {
      latitude: 51.77840976710607,
      longitude: 6.091277420666013,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    },
    destination: undefined,
    price: undefined,
  }

  onNewDateFrom(date: String) {
    console.log(date.split(/:(.+)/)[1].substr(1));
    now = moment(date.split(/:(.+)/)[1].substr(1))
    this.state.startDate = new Date(date.split(/:(.+)/)[1].substr(1));
    this.setState(this.state);
  }

  onNewDateTo(date: Date) {
    this.state.endDate = new Date(date.split(/:(.+)/)[1].substr(1));
    this.setState(this.state);
  }

  isBookingInformationValid(): boolean {
    return this.state.destination;
  }

  updatePrice() {
    if (!this.isBookingInformationValid()) {
      this.price = undefined;
      return;
    }
    var test = fetch('http://134.61.109.96:5000/booking_price', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        start_time: this.state.startDate.toString(),
        end_time: this.state.endDate.toString(),
        distance: this.calculateDistance(),
        user_id: "Patrice",
      }),
    }).then((response) => response.json()
    ).then((response) => {
      // console.log(response)
      this.state.price = response.price;
      this.setState(this.state)
    });
  }

  componentDidMount() {
    Platform.select({
      ios: () => { },
      default: (component: Component) => navigator.geolocation.watchPosition(
        (position) => {
          const region = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          };
          component.map.animateToRegion(region, 2000);
          // console.log(this.state.location);
          this.state.location = region;
          this.setState(this.state);
        },
        (error) => { console.error(error.message) },
        { enableHighAccuracy: false, timeout: 30000, maximumAge: 1000 },
      ),
    })(this)

  }

  calculateDistance() {
    var R = 6371e3; // metres

    var φ1 = this.state.location.latitude * Math.PI / 180;
    var φ2 = this.state.destination.latitude * Math.PI / 180;
    var Δφ = (this.state.destination.latitude - this.state.location.latitude) * Math.PI / 180;
    var Δλ = (this.state.destination.longitude - this.state.location.longitude) * Math.PI / 180;

    var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) *
      Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    var d = R * c;
    return d;
  }

  onMapPress = (event) => {
    this.state.destination = event.nativeEvent.coordinate;
    this.setState(this.state);
  }

  requestBooking() {

  }

  render() {
    // console.log(this.state);
    return (
      <View style={styles.container}>
        <View style={styles.mapView}>
          <MapView
            initialRegion={this.state.location}
            ref={(map) => { this.map = map }}
            style={styles.map}
            followsUserLocation={true}
            showsUserLocation={true}
            loadingEnabled={true}
            onPress={(marker) => this.onMapPress(marker)}
          >
            <MapView.Marker
              coordinate={this.state.location}
              ref={(marker) => { this.marker = marker }} />
            {/* {this.state.destination && (
              <MapViewDirections
                origin={this.state.location}
                destination={this.state.destination}
                apikey={"AIzaSyDXueJX7FMWFTqrWzDZCoGn_7_EWI133fw"}
              />
            )} */}
            {this.state.destination && (
              <MapView.Marker
                coordinate={this.state.destination} />
            )}
          </MapView>
          <View style={styles.textBackground}>
            <Icon name="search" type="font-awesome" color="grey" />
            <TextInput
              style={styles.mapsText}
              placeholder="Where do you want to go?"
            />
          </View>
        </View>
        {
          this.state.destination !== undefined &&
          <View containerStyle={styles.inputView}>
            <Text style={styles.infoText}>One trip will take approximately 20 minutes!</Text>
            <View style={styles.inputRow}>
              <Icon containerStyle={styles.inputPrependIcon} name="calendar" type="font-awesome" color="lightblue" size={16} />
              <DatePicker
                styles={{ width: 300 }}
                date={this.state.startDate.date}
                mode={'datetime'}
                placeholder="select date"
                is24Hour={true}
                minuteInterval={15}
                format="Fro\m \at: DD.MM.YY HH:mm"
                minDate={this.state.startDate.minDate}
                maxDate={this.state.startDate.maxDate}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                iconComponent={(<View />)}
                customStyles={{
                  dateInput: styles.input,
                }}
                onDateChange={(date) => this.onNewDateFrom(date)}
              />
              <View style={{ marginLeft: 10 }} />
              <Icon containerStyle={styles.inputPrependIcon} name="calendar" type="font-awesome" color="lightblue" size={16} />
              <DatePicker
                styles={{ width: 300 }}
                date={this.state.endDate.date}
                mode={'datetime'}
                is24Hour={true}
                placeholder="select date"
                format="To: DD.MM.YY HH:mm"
                minuteInterval={15}
                minDate={this.state.endDate.minDate}
                maxDate={this.state.endDate.maxDate}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                iconComponent={(<View />)}
                customStyles={{
                  dateInput: styles.input,
                }}
                onDateChange={(date) => this.onNewDateTo(date)}
              />
            </View>
            <PricingCard
              color="#4f9deb"
              title="Your Ride will cost"
              price="$0"
              // info={['1 User']}
              button={{ title: 'Request booking', icon: 'check-circle' }}
            />
          </View>
        }
      </View>
    )
  }
}

export default BookScreen;