import React from 'react';
import {
    StyleSheet,
    View,
    Text, StatusBar
} from "react-native";
import {SafeAreaView} from "react-navigation";
import HeaderToolbar from '../../components/toolbar/index'

export default class Home extends React.Component {

    render() {
        return (
            <View>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView></SafeAreaView>
                <HeaderToolbar/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    paddingContainer: {
        flexDirection: 'column',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop:10
    }
});
