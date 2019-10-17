import styles from './styles';
import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Text, Button, Image, Divider, Icon } from 'react-native-elements';
import { NavigationScreenProps } from 'react-navigation';
import { loginBackgroundImage } from '../../../assets';

class PasswordResetScreen extends Component<NavigationScreenProps> {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.background} source={loginBackgroundImage} />
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
              <Text>Its super awesome!</Text>
            </View>
            <Divider style={styles.divider} />
            <Text h4>Password reset</Text>
            <View style={styles.inputField}>
              <Icon containerStyle={styles.icon} name='envelope' type='font-awesome' />
              <TextInput
                autoCompleteType='email'
                autoFocus={true}
                placeholder='Email'
                style={styles.input}
                underlineColorAndroid='transparent'
              />
            </View>
            <Button
              containerStyle={styles.buttonContainer}
              buttonStyle={styles.button}
              title='Reset Password'
              onPress={() => { this.props.navigation.navigate('Login') }}
            />
          </View>
        </View>
      </View>
    );
  }
}


export default PasswordResetScreen;
