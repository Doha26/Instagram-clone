import React from 'react';
import {
    StyleSheet,
    View,
    Text, StatusBar
} from "react-native";
import {SafeAreaView} from "react-navigation";

export default class Profile extends React.Component {

    render() {
        return (
            <View>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView></SafeAreaView>
                <Text>Profile</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    paddingContainer: {
        flexDirection: 'column',
        padding: 16
    },

    marginContainer: {
        marginTop: 16
    },
});
