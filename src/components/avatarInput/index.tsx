import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    TextInput, TouchableOpacity, KeyboardAvoidingView,
} from "react-native";
import {Avatar, Text} from "react-native-elements";
import {colors} from "../../utils/theme";

export default class AvatarInput extends Component {

    render(){
        return (
            <View style={styles.mainContainer}>
                <KeyboardAvoidingView style={styles.inputZone}>
                    <TouchableOpacity style={{justifyContent:'center'}}>
                        <Avatar
                            containerStyle={styles.avatarStyle}
                            rounded
                            source={require('../../assets/images/ic8.png')}
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

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        flexDirection:'row',
        height: 40,
        borderRadius: 20,
    },
    inputZone:{
        flexDirection:'row',
        flex:10,
        justifyContent: 'center'
    },
    avatarStyle:{
        width:20,
        height:20,
        alignSelf:'center',
        borderRadius: 10,
    },
    inputStyle:{
        fontSize:13,
        fontWeight:"400",
        marginLeft:10, padding:3,
        flex:6
    },
    toggleEmojii:{
        alignContent:'center'
    }
});

