import styles from './styles';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Text, Button, Icon } from 'react-native-elements';
import { throwStatement } from '@babel/types';

class MyBookingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    }
  }

  static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
    headerRight: (
      <View style={{ marginHorizontal:20, flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ marginHorizontal: 10 }}>New Booking</Text>
        <Icon
          name="plus"
          type="font-awesome"
          onPress={() => navigation.navigate('Book')}
        />
      </View>
    )
  });

  render() {
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={new Date()}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
      // markingType={'period'}
      // markedDates={{
      //    '2017-05-08': {textColor: '#666'},
      //    '2017-05-09': {textColor: '#666'},
      //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
      //    '2017-05-21': {startingDay: true, color: 'blue'},
      //    '2017-05-22': {endingDay: true, color: 'gray'},
      //    '2017-05-24': {startingDay: true, color: 'gray'},
      //    '2017-05-25': {color: 'gray'},
      //    '2017-05-26': {endingDay: true, color: 'gray'}}}
      // monthFormat={'yyyy'}
      // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
      //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
      />
    );
  }

  loadItems(day) {
    const str = this.timeToString(day.timestamp);
    this.state.items[str] =
      [{
        name: 'My Booking',
        time: '9:00-9:30',
        icon: 'user',
        color: 'white',
        height: 75,
      }, {
        name: 'Somebody elses Booking',
        time: '11:00-12:00',
        icon: 'user',
        color: 'grey',
        height: 100,
      }, {
        name: 'My Booking',
        time: '15:00-17:00',
        icon: 'user',
        color: 'white',
        height: 175,
      }, {
        name: 'Somebody elses Booking',
        time: '21:00-22:00',
        icon: 'user',
        color: 'grey',
        height: 125,
      }
      ]
    console.log(this.state.items);
    setTimeout(() => {
      const newItems = {};
      Object.keys(this.state.items).forEach(key => { newItems[key] = this.state.items[key]; });
      this.setState({
        items: newItems
      });
    }, 1000);
    // console.log(`Load Items for ${day.year}-${day.month}`);
  }

  renderItem(item) {
    return (
      <View style={[styles.item, { height: item.height, backgroundColor: item.color }]}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Icon raised name={item.icon} type={'font-awesome'} />
          <View style={{ flex: 1, flexDirection: 'column', marginLeft:30 }}>
            <Text size={24}>{item.name}</Text>
            <Text size={24}>{item.time}</Text>
          </View>
        </View>
      </View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

export default MyBookingsScreen;
