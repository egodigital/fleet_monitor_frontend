import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 320,
    height: 320,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  },
  slides:{

  },

});

const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    text: 'Your Journey of Discovery.\nAll that you want to know, and all that you will ever know',
    image: require('../../assets/11.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'All that we will show you, and all that you will ever see',
    image: require('../../assets/12.jpg'),
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: 'I\'m already out of ideas, forever',
    image: require('../../assets/13.jpg'),
    backgroundColor: '#22bcb5',
  }
];
 
export default class App extends React.Component {
  state = {
    showRealApp: false
  }
  _renderItem = (item) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }
  onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }
  render() {
    if (this.state.showRealApp) {
      return <App />;
    } else {
      return <AppIntroSlider renderItem={this._renderItem} slides={slides} onDone={this.onDone}/>;
    }
  }
}