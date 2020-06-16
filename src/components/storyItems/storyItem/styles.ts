import {StyleSheet} from "react-native";
import {colors} from "~/utils/theme";

const styles = StyleSheet.create({
    container: {
        height: 71,
        flexDirection: 'column',
        width: 71,
        borderRadius: 35.5,
        backgroundColor:colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileName:{
        marginTop:5,
        color: colors.black,
        fontWeight: "300",
        fontSize: 13,
        marginLeft:10
    },
    containerProfile: {
        height: 76,
        flexDirection: 'column',
        width: 76,
        borderRadius: 38,
        backgroundColor:colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        height: 64,
        width: 64,
        position:'relative',
        backgroundColor:colors.white,
        borderRadius: 32,
        zIndex:100
    },
    avatarProfile: {
        height: 76,
        width: 76,
        backgroundColor:colors.white,
        borderRadius: 36,
        position:'relative',
        zIndex:200
    },
    btnPlusBg:{
        backgroundColor:colors.white,
        width:26,
        height:26,
        borderRadius:13,
        zIndex: 500,
        position:'absolute',
        alignItems:'center',
        justifyContent:'center',
        bottom:0,
        right:0
    },
    btnPlus:{
        width:34,
        height:34,
        marginLeft:10,
        marginTop:10,
    },
    btnLive:{
        height: 24,
        width: 38,
        alignItems: 'center',
        borderColor:colors.white,
        borderWidth:3,
        position:'absolute',
        justifyContent: 'center',
        borderRadius:6,
        padding:4,
        bottom: 0,
        margin:'auto',
        top:-16,
        marginLeft:30

    },
    textLive:{
        color:colors.white,
        fontSize:10,
        fontWeight:'bold'
    }
});
export default styles;
