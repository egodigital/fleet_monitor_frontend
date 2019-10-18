import React, { Component } from "react";
import { View, Alert, Text } from "react-native";
import { Card, Divider } from 'react-native-elements';
import Leaderboard from "./leaderboard.js";
import styles from "./styles";
import { ScrollView, TouchableHighlight } from "react-native-gesture-handler";

export default class AvatarAndClickable extends Component {
  state = {
    prifileUser: profileUser,
    data: DATA,
    event: cEvents
  };

  componentDidMount() {
    // simulate new users being added to leaderboard
    setInterval(() => {
      const newData = {
        name: "New User Data!!",
        score: Math.floor(Math.random() * 100).toString(),
        iconUrl:
          "https://www.shareicon.net/data/128x128/2016/09/15/829473_man_512x512.png"
      };
      this.setState({ data: this.state.data.concat(newData) });
    }, 100000);
  }

  alert = (title, body) => {
    Alert.alert(title, body, [{ text: "OK", onPress: () => {} }], {
      cancelable: false
    });
  };

  render() {
    const props = {
      com: [
        {
          data: this.state.prifileUser,
          icon: "iconUrl",
          evenRowColor: "#edfcf9"
        },
        {
          labelBy: "name",
          sortBy: "score",
          data: this.state.data,
          icon: "iconUrl",
          onRowPress: (item, index) => {
            this.alert(item.name + " clicked", item.score + " points, wow!");
          },
          evenRowColor: "#edfcf9"
        },        
        {
          data: this.state.event,
          icon: "iconUrl",
          evenRowColor: "#edfcf9"
        }
      ]
    };


    return (
      <ScrollView>
      <View style={{ flex: 1 }}>
        {/* Ghetto Header */}
        <View
          style={{
            paddingTop: 50,
            backgroundColor: "black",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 30, color: "white", paddingBottom: 10 }}>
            Profile
          </Text>
        </View>
        <Leaderboard {...props.com[0]} renderItem={(item) => (
          <TouchableHighlight>
          <View>
            <Card>
            <Text>Name: {item.name}</Text>
            <Text>Last Name: {item.lastName}</Text>
            <Text>Occupation: {item.occupation}</Text>
            <Divider style={{ marginVertical: 10 }} />
            <Text>Freinds: {item.friends}</Text>
            <Text>Favrites: {item.favorites}</Text>
            <Text>Comments: {item.comments}</Text>
            <Divider style={{ marginVertical: 10 }} />
            <Text>Prefrences: {item.prefrences}</Text>
            <Text>Nature: {item.nature}</Text>
            <Divider style={{ marginVertical: 10 }} />
            </Card>
            <Divider></Divider>
          </View>
          </TouchableHighlight>
        )} />
        <View
          style={{
            paddingTop: 50,
            backgroundColor: "black",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 30, color: "white", paddingBottom: 10 }}>
            Weekly Leaderboard
          </Text>
        </View>
        <Leaderboard {...props.com[1]} />
        <View
          style={{
            paddingTop: 50,
            backgroundColor: "black",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 30, color: "white", paddingBottom: 10 }}>
            Community Activities
          </Text>
        </View>
        <Leaderboard {...props.com[2]} renderItem={(item) => (
          <TouchableHighlight>
          <View>
            <Card>
            <Text>{item.name}</Text>
            <Text>{item.data}</Text>
            <Text>{item.timeslot}</Text>
            <Text>{item.sharing}</Text>
            <Text>{item.activity}</Text>
            </Card>
            <Divider></Divider>
          </View>
          </TouchableHighlight>
        )} />
      </View>
      </ScrollView>
    );
  }
}

const profileUser = [
  {
    name: 'Petrice',
    lastName: 'Loves this app',
    occupation: 'News reported/Dancer',
    friends: '201',
    favorites: '491',
    comments: '4,832',
    prefrences: 'economical',
    nature: 'social',
  }
]

const cEvents = [
  {
    name: "Jhon Doe",
    date: "Today",
    timeslot: "12:30-13:30",
    sharing: "possible",
    activity: "Grossory"
  },
  {
    name: "Petrice",
    Date: "Today",
    timeslot: "20:30-10:30",
    sharing: "possible",
    activity: "Gym"
  },
  {
    name: "Jhon Doe",
    Date: "Tomorrow",
    timeslot: "12:30-13:30",
    sharing: "possible",
    activity: "Grossory"
  },
  {
    name: "Petrice",
    Date: "Tomorrow",
    timeslot: "20:30-10:30",
    sharing: "possible",
    activity: "Gym"
  },
  {
    name: "Jhon Doe",
    Date: "21,10,2019",
    timeslot: "12:30-13:30",
    sharing: "possible",
    activity: "Grossory"
  },
  {
    name: "Petrice",
    Date: "21,10,2019",
    timeslot: "20:30-10:30",
    sharing: "possible",
    activity: "Gym"
  }
]

const DATA = [
  {
    name: "We Tu Lo",
    score: null,
    iconUrl:
      "https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59094043-stock-illustration-profile-icon-male-avatar.jpg"
  },
  {
    name: "Adam Savage",
    score: 12,
    iconUrl:
      "https://www.shareicon.net/data/128x128/2016/09/15/829473_man_512x512.png"
  },
  {
    name: "Derek Black",
    score: 244,
    iconUrl: "http://ttsbilisim.com/wp-content/uploads/2014/09/20120807.png"
  },
  {
    name: "Erika White",
    score: 0,
    iconUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr27ZFBaclzKcxg2FgJh6xi3Z5-9vP_U1DPcB149bYXxlPKqv-"
  },
  {
    name: "Jimmy John",
    score: 20,
    iconUrl: "https://static.witei.com/static/img/profile_pics/avatar4.png"
  },
  {
    name: "Joe Roddy",
    score: 69,
    iconUrl: "https://static.witei.com/static/img/profile_pics/avatar4.png"
  },
  {
    name: "Ericka Johannesburg",
    score: 101,
    iconUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShPis8NLdplTV1AJx40z-KS8zdgaSPaCfNINLtQ-ENdPvrtMWz"
  },
  {
    name: "Tim Thomas",
    score: 41,
    iconUrl: "http://ttsbilisim.com/wp-content/uploads/2014/09/20120807.png"
  },
  {
    name: "John Davis",
    score: 80,
    iconUrl:
      "https://cdn.dribbble.com/users/223408/screenshots/2134810/me-dribbble-size-001-001_1x.png"
  },
  {
    name: "Tina Turner",
    score: 22,
    iconUrl:
      "https://cdn.dribbble.com/users/223408/screenshots/2134810/me-dribbble-size-001-001_1x.png"
  },
  {
    name: "Harry Reynolds",
    score: null,
    iconUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsSlzi6GEickw2Ft62IdJTfXWsDFrOIbwXhzddXXt4FvsbNGhp"
  },
  {
    name: "Betty Davis",
    score: 25,
    iconUrl:
      "https://landofblogging.files.wordpress.com/2014/01/bitstripavatarprofilepic.jpeg?w=300&h=300"
  },
  {
    name: "Lauren Leonard",
    score: 30,
    iconUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr27ZFBaclzKcxg2FgJh6xi3Z5-9vP_U1DPcB149bYXxlPKqv-"
  }
];
