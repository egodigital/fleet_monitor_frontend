import styles from './styles';
import React, { Component } from 'react';
import { Platform, View, Image, TextInput, Button } from 'react-native';
import { Text, Icon, Divider } from 'react-native-elements';

import { NavigationScreenProps } from 'react-navigation';
import { loginBackgroundImage } from '../../../assets';

class RegisterScreen extends Component<NavigationScreenProps> {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.background} source={loginBackgroundImage} />
        <View style={styles.boxFlex}>
          <View style={styles.box}>
            <View style={styles.boxBackground} />
            <View style={styles.boxFlex}>
              <Icon
                size={16}
                reverse
                containerStyle={styles.back}
                name='angle-left'
                type='font-awesome'
                onPress={() => { this.props.navigation.pop() }} />
              <View style={styles.header}>
                <Text h3>My Boilerplate</Text>
                <Text>Log in and find out!</Text>
                <Divider style={styles.divider} />
                <Text>Register a new Account</Text>
              </View>
              <View style={styles.inputField}>
                <Icon containerStyle={styles.icon} name='user' type='font-awesome' />
                <TextInput
                  autoCompleteType='email'
                  autoFocus={true}
                  placeholder='Email'
                  style={styles.input}
                  underlineColorAndroid='transparent'
                />
              </View>
              <View style={styles.inputField}>
                <Icon containerStyle={styles.icon} name='lock' type='font-awesome' />
                <TextInput
                  autoCompleteType='password'
                  placeholder='Password'
                  secureTextEntry
                  style={styles.input}
                  underlineColorAndroid='transparent'
                />
              </View>
              <View style={styles.inputField}>
                <Icon containerStyle={styles.icon} name='lock' type='font-awesome' />
                <TextInput
                  autoCompleteType='password'
                  placeholder='Repeat password'
                  secureTextEntry
                  style={styles.input}
                  underlineColorAndroid='transparent'
                />
              </View>
              <Button
                containerStyle={styles.buttonContainer}
                buttonStyle={styles.button}
                title='Register'
                onPress={() => { this.props.navigation.navigate('Login') }}
              />

            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default RegisterScreen;
