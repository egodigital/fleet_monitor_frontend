import styles from './styles';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Text, Button, Icon } from 'react-native-elements';
import { throwStatement } from '@babel/types';

class BookingsScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: {}
    }
  }

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
        name: 'akshjdakhjsd',
        time: '',
        height: 25,
      }, {
        name: '',
        time: '',
        height: 25,
      }, {
        name: '',
        time: '',
        height: 25,
      }, {
        name: '',
        time: '',
        height: 25,
      }, {
        name: '',
        time: '',
        height: 25,
      }, {
        name: '',
        time: '',
        height: 25,
      }, {
        name: '',
        time: '',
        height: 25,
      }, {
        name: '',
        time: '',
        height: 25,
      }, {
        name: '',
        time: '',
        height: 25,
      }, {
        name: '',
        time: '',
        height: 25,
      }, {
        name: '',
        time: '',
        height: 25,
      }, {
        name: '',
        time: '',
        height: 25,
      }, {
        name: '',
        time: '',
        height: 25,
      }, {
        name: '',
        time: '',
        height: 25,
      }, {
        name: '',
        time: '',
        height: 25,
      }]
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
      <View style={[styles.item, { height: item.height }]}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          {/* <Icon raised name={item.icon} type={'font-awesome'} /> */}
          {/* <View style={{ flex: 1, flexDirection: 'column' }}> */}
          <Text size={24}>{item.name}</Text>
          {/* <Text size={24}>{item.time}</Text> */}
          {/* </View> */}
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

export default BookingsScreen;
