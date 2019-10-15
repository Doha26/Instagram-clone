import React from 'react'
import {StyleSheet} from 'react-native'

import {Text, TouchableOpacity, View} from "react-native";
import {Image} from "react-native-elements";
import {colors} from "../../utils/theme";

const SearchTag = (props: any) => (
    <TouchableOpacity style={{marginLeft: props.id !== 0 ? 5 : 0}}>
        <View style={styles.container}>
            {props.id == 0 ?
                <Image style={{width: 26, height: 26}} source={require('../../assets/images/tv.png')}/> : null}
            <Text style={styles.tag}>{props.title}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        borderColor: colors.exlight_gray,
        borderWidth: 2,
        borderRadius: 8,
        padding:8,
        alignItems: 'center',
        justifyContent: 'flex-start',
        height:40,
        maxHeight:40
    },
    tag: {
        fontWeight: 'bold'
    }
});

export default SearchTag;
