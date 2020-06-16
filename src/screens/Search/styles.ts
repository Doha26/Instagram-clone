import {Dimensions, StyleSheet} from "react-native";
import {colors} from "~/utils/theme";
import {exp} from "react-native-reanimated";

const styles = StyleSheet.create({
    paddingContainer: {
        flexDirection: 'column',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10
    },
    marginContainer: {
        marginTop: 16
    },
    modal: {
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        flex: 1
    },
    headerSearch: {
        borderRadius: 8,
        backgroundColor: colors.white,
        borderBottomWidth: 0,
        paddingLeft: 8
    },
    headerCamera:{
        borderRadius: 8,
        backgroundColor: colors.transparent,
        borderBottomWidth: 0,
        paddingLeft: 8
    },
    textUsername:{
        fontWeight: 'bold',
        marginTop: 9,
        color: colors.dark_gray,
        textTransform: 'uppercase',
        fontSize: 32
    },
    footer:{
        height: 20,
        backgroundColor: colors.transparent,
        borderTopWidth: 0
    },
    footerView:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1
    },
    nameTag:{color: colors.white, fontWeight: 'bold', marginLeft: 10},
});

export default styles;
