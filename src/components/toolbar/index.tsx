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
                    <Image style={{width:32, height:28}} source={require('../../assets/images/camera.png')}/>
                </TouchableOpacity>
            </View>
            <View style={styles.itemTextContainer}>
                <TouchableOpacity>
                    <Image  style={{width:139, height:39}} source={require('../../assets/images/insta.png')}/>
                </TouchableOpacity>
            </View>
            <View style={Object.assign({}, styles.itemLiveContainer)}>
                <TouchableOpacity>
                    <Image  style={{width:44, height:44}}  source={require('../../assets/images/tv.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row' ,alignSelf:'center' ,marginTop:5}}>
                    <Image  style={{width:26, height:26}}  source={require('../../assets/images/direct.png')}/>
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
        flex: 2,
    },
    itemTextContainer: {
        flex: 4,
    },
    itemLiveContainer: {
        flex:1.4,
        flexDirection: 'row'
    }
});
export default HeaderToolbar;
