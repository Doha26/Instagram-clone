import React from 'react'
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {Image} from "react-native-elements";
import {colors} from "../../utils/theme";
import SvgUri from "react-native-svg-uri";

const HeaderToolbar : React.StatelessComponent = () =>{
    return (
        <View style={Object.assign({}, styles.logoContainer)}>
            <View style={styles.itemsCamContainer}>
                <TouchableOpacity>
                    <SvgUri width="32" height="28" source={require('../../assets/svg/camera.svg')}/>
                </TouchableOpacity>
            </View>
            <View style={styles.itemTextContainer}>
                <TouchableOpacity>
                    <Image  style={{width:139, height:39}} source={require('../../assets/images/insta.png')}/>
                </TouchableOpacity>
            </View>
            <View style={Object.assign({}, styles.itemLiveContainer)}>
                <TouchableOpacity>
                    <Image  style={{width:32, height:29}}  source={require('../../assets/images/direct.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    logoContainer: {
        flex: 10,
        position:'absolute',
        flexDirection: 'row',
        top:45,
        left:20,
        right:20
    },
    itemsCamContainer: {
        flex: 3,
    },
    itemTextContainer: {
        flex: 3,
    },
    itemLiveContainer: {
        flex:4,
        flexDirection: 'row',
        marginTop: 5,
        justifyContent:'flex-end'
    }
});
export default HeaderToolbar;
