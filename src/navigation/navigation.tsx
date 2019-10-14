import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from "./home";
import Intro from "../screens/Intro";
import Comments from "../screens/Comments";


const appStack = createStackNavigator({
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
    Comments:{
        screen:Comments,
        navigationOptions: () => ({
            header: null,
            headerBackTitle: null
        })
    }
},{
    initialRouteName:'Home'
});


// @ts-ignore
export default createAppContainer(createSwitchNavigator(
    {
        Intro: Intro,
        App: appStack,
    },
    {
        initialRouteName: 'App'
    }
));
