import React from "react";
import {View, StyleSheet, Dimensions} from "react-native";
import {Text} from "react-native-elements";
import {colors} from "../../utils/theme";
import {bool} from "prop-types";

const CommentItem: React.StatelessComponent = (props:any) => {
    return (
        <View>
            <Text numberOfLines={1} style={styles.commentRow}><Text style={styles.author}>@{props.author}</Text>{` ${props.message}`}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    commentRow: {
        lineHeight:20 ,
        fontSize: 14,
        color: colors.black
    },
    author:{
        fontWeight:'bold',
        color: colors.black
    }
});

export default CommentItem;
