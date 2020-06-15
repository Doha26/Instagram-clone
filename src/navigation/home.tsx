import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Image} from "react-native-elements";
import Home from "~/screens/Home";
import Search from "~/screens/Search";
import Like from "~/screens/Favorite";
import Profile from "~/screens/Profile";
import Add from "~/screens/Add";

export default (createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => <Image style={{width: 32, height: 32}}
                                                    source={require('~/assets/images/home.png')}/>
            }
        },
        Search: {
            screen: Search,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => <Image style={{width: 32, height: 32}}
                                                    source={require('~/assets/images/search.png')}/>
            }
        },
        Add: {
            screen: Add,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => <Image style={{width: 32, height: 32}}
                                                    source={require('~/assets/images/add.png')}/>
            }
        },
        Like: {
            screen: Like,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => <Image style={{width: 36, height: 36}}
                                                    source={require('~/assets/images/heart.jpg')}/>
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => <Image style={{width: 32, height: 32}}
                                                    source={require('~/assets/images/user.png')}/>
            }
        }
    },
    {
        tabBarOptions: {
            showLabel: false,
            tabStyle: {
                padding: 20
            },
        },
        initialRouteName: 'Home',

    }
));
