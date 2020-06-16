import React from 'react'
import {Text, TouchableOpacity, View} from "react-native";
import {Image} from "react-native-elements";
import styles from "~/components/searchTag/styles";

const SearchTag = (props: any) => (
    <TouchableOpacity style={{marginLeft: props.id !== 0 ? 5 : 0}}>
        <View style={styles.container}>
            {props.id == 0 ?
                <Image style={{width: 26, height: 26}} source={require('~/assets/images/tv.png')}/> : null}
            <Text style={styles.tag}>{props.title}</Text>
        </View>
    </TouchableOpacity>
);

export default SearchTag;
