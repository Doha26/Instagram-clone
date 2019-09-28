import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from "./home";
import Intro from "../screens/Intro";


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
    }
},{
    initialRouteName:'Splash'
});


// @ts-ignore
export default createAppContainer(createSwitchNavigator(
    {
        Intro: Intro,
        App: appStack,
    },
    {
        initialRouteName: 'Intro'
    }
));
