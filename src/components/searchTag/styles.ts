import {StyleSheet} from "react-native";
import {colors} from "~/utils/theme";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        borderColor: colors.exlight_gray,
        borderWidth: 2,
        borderRadius: 8,
        padding:8,
        alignItems: 'center',
        justifyContent: 'flex-start',
        height:40,
        maxHeight:40
    },
    tag: {
        fontWeight: 'bold'
    }
});

export default styles;
