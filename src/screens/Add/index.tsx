import React from 'react';
import {
    StyleSheet,
    View,
    Text, StatusBar
} from "react-native";
import {SafeAreaView} from "react-navigation";

export default class Add extends React.Component {

    render() {
        return (
            <View>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView></SafeAreaView>
                <Text>Add</Text>
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
