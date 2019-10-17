import styles from './styles';
import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Text, Button, Icon, Divider } from 'react-native-elements';
import { TextInput } from 'react-native';

import { loginBackgroundImage } from '../../../assets'
import { NavigationScreenProps } from 'react-navigation';

class LoginScreen extends Component<NavigationScreenProps> {

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.background} source={loginBackgroundImage} />
        <View style={styles.box}>
          <View style={styles.boxBackground} />
          <View style={styles.boxFlex}>
            <View style={styles.header}>
              <Text h3>My Boilerplate</Text>
              <Text>Its super awesome!</Text>
            </View>
            <Divider style={styles.divider} />
            <Text h4>Please sign in</Text>
            <View style={styles.inputField}>
              <Icon containerStyle={styles.icon} name='user' type='font-awesome' />
              <TextInput
                autoCompleteType='email'
                // autoFocus={true}
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
            <Button
              containerStyle={styles.buttonContainer}
              buttonStyle={styles.button}
              title='Sign In'
              onPress={() => {this.props.navigation.navigate('Home')}}
            />
            <View style={styles.textField}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
              <Text>Register</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('PasswordReset')}>
                <Text>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default LoginScreen;
