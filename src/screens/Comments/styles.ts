import {Dimensions, StyleSheet} from "react-native";
import {colors} from "~/utils/theme";

const styles = StyleSheet.create({
    footer: {
        height: 110,
        padding: 10,
        backgroundColor: colors.white
    },
    paddingContainer: {
        flexDirection: 'column',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10
    },
    marginContainer: {
        marginTop: 16
    },
    emoji: {
        marginLeft: 10,
        fontSize: 19
    },
    inputZone: {
        flexDirection: 'row',
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatarStyle: {
        width: 45,
        height: 45,
        alignSelf: 'center',
        borderRadius: 22.5,
    },
    inputStyle: {
        fontSize: 13,
        height: 40,
        fontWeight: "400",
        marginLeft: 10, padding: 3,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: colors.light_gray,
        borderRadius: 20,
        flex: 6
    },
    scrollView: {},
    spinner:{
        marginLeft: (Dimensions.get("window").width / 2) - 20,
        marginTop: 30,
        marginRight: 'auto'
    },
    commentContainer:{
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 15,
        paddingBottom: 15
    }

});

export default styles;
