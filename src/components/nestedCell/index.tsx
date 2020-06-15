import React from 'react'
import {PureComponent} from "react";
import {View, StyleSheet, TouchableOpacity, Dimensions} from "react-native";
import {Image} from "react-native-elements";
import {colors} from "~/utils/theme";


class NestedCell extends PureComponent {
    render() {
        const {item} = this.props;
        return (
            <View
                style={[
                    styles.cell,
                    {height: item.height, backgroundColor: colors.darkBlue},
                ]}
            >
                <TouchableOpacity activeOpacity={0.75} styl>
                    <Image style={{width: Dimensions.get("window").width / 3, height: item.height}}
                           source={{uri: item.uri}}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cell: {
        margin: 1,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 40,
    },
});

export default NestedCell;
