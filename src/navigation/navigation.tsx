import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator,} from 'react-navigation-stack';
import Home from "./home";
import Intro from "~/screens/Intro";
import Comments from "~/screens/Comments";
import PostDetail from "~/screens/Detail";
import Root from "~/screens/Root";
import Signin from "~/screens/Member/signin";
import Signup from "~/screens/Member/signup";

const appStack = createStackNavigator({
    Root: {
        screen: Root,
        navigationOptions: () => ({
            header: null,
            headerBackTitle: null,
        }),

    },
    Splash: {
        screen: Intro,
        navigationOptions: () => ({
            header: null,
            headerBackTitle: null
        })
    },
    Home: {
        screen: Home,
        navigationOptions: () => ({
            header: null,
            headerBackTitle: null
        })
    },
    Comments: {
        screen: Comments,
        navigationOptions: () => ({
            header: null,
            headerBackTitle: null
        })
    },
    PostDetail: {
        screen: PostDetail,
        navigationOptions: () => ({
            header: null,
            headerBackTitle: null
        })
    },
    Signin: {
        screen: Signin,
        navigationOptions: () => ({
            header: null,
            headerBackTitle: null
        })
    },
    Signup: {
        screen: Signup,
        navigationOptions: () => ({
            header: null,
            headerBackTitle: null
        })
    },
}, {
    initialRouteName: 'Signin'
});


// @ts-ignore
export default createAppContainer(createSwitchNavigator(
    {
        Intro: Intro,
        Root: Root,
        App: appStack,
    },
    {
        initialRouteName: 'Intro'
    }
));
