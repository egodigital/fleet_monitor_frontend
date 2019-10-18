import React, { Component } from "react";
import { Text, View, ActivityIndicator, StyleSheet } from "react-native";
import { Image } from "react-native-elements";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

class LoadingScreen extends Component {
    componentDidMount = () => {
        setTimeout(() => {
            this.props.navigation.navigate("Welcome");
        }, 2000);
    };

    render() {
        return (
            <View style={styles.container}>
                <Image style={{width: 300, height: 116}} source={require('../../assets/logo.png')}/>
                <ActivityIndicator size="large" />
            </View>
        );
    }
}

export default LoadingScreen;