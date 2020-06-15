import {Dimensions, StyleSheet} from "react-native";
import {colors} from "~/utils/theme";

const styles = StyleSheet.create({
    wrapper: {},
    paddingContainer: {
        flexDirection: 'column',
        padding: 16
    },
    btnActions: {
        fontWeight: 'bold',
        fontSize: 17,
        color:colors.white
    },
    marginContainer: {
        marginTop: 16
    },
    modal: {
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        flex: 1
    },
    scene: {
        flex: 1,
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
});
export default styles;
