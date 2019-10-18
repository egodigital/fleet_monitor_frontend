
import React from 'react';
import { Platform, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createSwitchNavigator, createAppContainer, SafeAreaView } from 'react-navigation';
import { NavigationScreenOptions } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createBrowserApp } from '@react-navigation/web';
import { createDrawerNavigator, DrawerNavigatorItems, DrawerContentComponentProps } from 'react-navigation-drawer';
import SettingsScreen from './Settings';
import ProfileScreen from './Profile';
import HomeScreen from './Home';
import Auth from './Auth'
import Welcome from './WelcomeScreen'
import Loading from './Loading'
import { Avatar, Text, Divider } from 'react-native-elements';
import { NavigationScreenProps } from 'react-navigation';
import { TabScene } from 'react-navigation';
import BookingsScreen from './Bookings/BookingsScreen';
import BookScreen from './Book';


const defaultNavigationOptions = ({ navigation }: NavigationScreenOptions) => ({
  title: navigation.state.routeName,
  headerLeft: Platform.select({
    ios: null,
    android: null,
    default: (
      <Icon
        name='bars'
        size={20}
        style={{ paddingHorizontal: 20 }}
        onPress={() => navigation.toggleDrawer()}
      />
    )
  }),
  headerRight: (navigation.state.routeName === 'Settings') ? null : <Icon
    name='cog'
    size={20}
    style={{ paddingHorizontal: 20 }}
    onPress={() => navigation.navigate('Settings')}
  />,
});

const MenuNavigationOptions = (iconName: string) => ({ navigation }: NavigationScreenProps) => {
  return {
    tabBarLabel: navigation.state.routeName,
    tabBarIcon: ({ tintColor }: TabScene) => (
      <Icon name={iconName} color={tintColor} size={20} />
    ),
    drawerLabel: navigation.state.routeName,
    drawerIcon: ({ tintColor }: TabScene) => (
      <Icon name={iconName} color={tintColor} size={20}  />
    )
  };
};

const Home = createStackNavigator({
  Home:
  {
    screen: HomeScreen,
    path: '',
    navigationOptions: defaultNavigationOptions,
  },
}, {
  initialRouteName: 'Home',
  headerMode: Platform.select({ web: 'screen' }),
});
Home.navigationOptions = MenuNavigationOptions('home');
Home.path = '';

const Settings = createStackNavigator({
  Settings: {
    screen: SettingsScreen,
    path: '',
    navigationOptions: defaultNavigationOptions,
  },
}, {
  initialRouteName: 'Settings',
  headerMode: Platform.select({ web: 'screen' }),
});
Settings.navigationOptions = MenuNavigationOptions('cog');
Settings.path = 'settings';


const Book = createStackNavigator({
  Book: {
    screen: BookScreen,
    path: '',
    navigationOptions: defaultNavigationOptions,
  },
}, {
  initialRouteName: 'Book',
  headerMode: Platform.select({ web: 'screen' }),
});
Book.navigationOptions = MenuNavigationOptions('cog');
Book.path = 'settings';


const Profile = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    path: '',
    navigationOptions: defaultNavigationOptions,
  },
}, {
  initialRouteName: 'Profile',
  headerMode: Platform.select({ web: 'screen' }),
});
Profile.navigationOptions = MenuNavigationOptions('user');
Profile.path = 'settings';

const createAppNavigator = () => createBottomTabNavigator({ Home, Book, Profile, Settings },
  {
    initialRouteName: 'Profile',
  });
const createWebNavigator = () => createDrawerNavigator({ Home, Book, Profile, Settings },
  {
    initialRouteName: 'Profile',

    contentComponent: (props: DrawerContentComponentProps) => {
      console.log(props);
      return (
        <SafeAreaView >
          <View style={{ backgroundColor: 'lightgrey', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', padding: 10 }}>
            <Avatar rounded size='medium' icon={{ name: 'user', type: 'font-awesome' }} />
            <View>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Boilerplate App</Text>
                <Text style={{}}>An awesome template!</Text>
              </View>
            </View>
          </View>
          <Divider />
          <DrawerNavigatorItems {...props} />
        </SafeAreaView >
      )
    }
  },
);

var Main = Platform.select({
  ios: createAppNavigator,
  android: createAppNavigator,
  default: createAppNavigator,
})();
Main.path = '';

const RootSwitch = createSwitchNavigator({
  Auth,
  Main,
  Welcome,
  Loading,
}, {
    initialRouteName: 'Loading',
});

const createApp = Platform.select({
  web: (input: any) => createBrowserApp(input, { history: 'browser' }),
  default: (input: any) => createAppContainer(input),
});


export default createApp(RootSwitch);
