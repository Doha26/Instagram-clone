import React from 'react';
import {
    StyleSheet,
    View,
    Text, StatusBar
} from "react-native";
import {SafeAreaView} from "react-navigation";

export default class Like extends React.Component {

    render() {
        return (
            <View>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView></SafeAreaView>
                <Text>Like</Text>
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
