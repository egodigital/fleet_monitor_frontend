import React, { Component } from "react";
import { Text, View, ActivityIndicator, StyleSheet } from "react-native";

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
                <Text style={{ paddingBottom: 20 }}>Hello!</Text>
                <ActivityIndicator size="large" />
            </View>
        );
    }
}

export default LoadingScreen;