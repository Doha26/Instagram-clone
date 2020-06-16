import {StyleSheet} from "react-native";

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
export default styles;
