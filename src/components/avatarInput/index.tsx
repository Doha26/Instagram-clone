import React, {Component} from 'react';
import {
    View,
    TextInput, TouchableOpacity, KeyboardAvoidingView,
} from "react-native";
import {Avatar, Text} from "react-native-elements";
import {colors} from "~/utils/theme";
import styles from "~/components/avatarInput/styles";

export default class AvatarInput extends Component {

    render(){
        return (
            <View style={styles.mainContainer}>
                <KeyboardAvoidingView style={styles.inputZone}>
                    <TouchableOpacity style={{justifyContent:'center'}}>
                        <Avatar
                            containerStyle={styles.avatarStyle}
                            rounded
                            source={require('~/assets/images/ic8.png')}
                        />
                    </TouchableOpacity>
                    <TextInput underlineColorAndroid='transparent' style={styles.inputStyle}
                               placeholder='Add a comment...' placeholderTextColor={colors.light_gray}
                    />
                    <TouchableOpacity style={{justifyContent:'center'}}>
                        <Text style={styles.toggleEmojii}>❤️</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        );
    }
};


