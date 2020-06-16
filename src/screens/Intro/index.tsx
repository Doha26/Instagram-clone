import React from 'react';
import {NavigationScreenProp, SafeAreaView} from 'react-navigation';
import {View, StatusBar} from 'react-native';
import {colors} from "~/utils/theme";
import {Image} from "react-native-elements";
import styles from "~/screens/Intro/styles";


export interface NavigationProps {
    navigation: NavigationScreenProp<any, any>
}

interface IProps extends NavigationProps {
}

export default class Intro extends React.PureComponent<IProps> {

    constructor(props: IProps) {
        super(props)
    }
    performTimeConsumingTask = async () => {
        return new Promise((resolve) =>
            setTimeout(
                () => {
                    resolve('finish');
                },
                2000
            )
        )
    };

    async componentDidMount() {
        const data = await this.performTimeConsumingTask();
        if (data !== null) {
            this.props.navigation.navigate('Home');
        }
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: colors.white}}>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView/>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.logo}
                        source={require('~/assets/images/logo.png')}
                    />
                </View>
            </View>
        );
    }
}
