import * as React from "react";
import {View, Image, Text, SafeAreaView, StyleSheet, Dimensions} from "react-native";
import DEFAULT_AVATAR from "~/assets/images/ic1.png";
import ProgressBarAnimated from 'react-native-progress-bar-animated'
import {colors} from "~/utils/theme";

export default class SlideHeader extends React.PureComponent {
    state = {
        progressValue: 0
    };
    constructor(props: any) {
        super(props);

    }

    componentDidMount() {
        this.updateLoader();
    }

    updateLoader = () => {
        setInterval(() => {
            this.setState({progressValue: this.state.progressValue + 2});
            if(this.state.progressValue==118){
                //alert("Fini");
            }
        }, 100)

    };
    render() {
        // @ts-ignore
        const {user} = this.props;

        const progressCustomStyles = {
            backgroundColor: colors.white,
            borderRadius: 1.5,
            height: 3,
        };
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.container}>
                    <ProgressBarAnimated
                        {...progressCustomStyles}
                        width={Dimensions.get("window").width - 30}
                        value={this.state.progressValue}
                    />
                    <View style={styles.avatarContainer}>
                        <Image
                            source={require('~/assets/images/ic4.png')}
                            defaultSource={DEFAULT_AVATAR}
                            style={styles.avatar}
                        />
                        <Text style={styles.username}>{user}</Text>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        padding: 16
    },
    avatarContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 36 / 2,
        marginRight: 16,
    },
    username: {
        color: "white",
        fontSize: 16
    }
});
