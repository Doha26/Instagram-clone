import React from 'react';
import {
    StyleSheet,
    View,
    Text, StatusBar, TextInput
} from "react-native";
import {SafeAreaView} from "react-navigation";
export default class Search extends React.Component {


    render() {
        return (
            <View>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView></SafeAreaView>

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
