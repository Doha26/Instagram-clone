import {StyleSheet} from "react-native";
import {colors} from "~/utils/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBlue
    },
    logo:{
        width:200,
        height:200
    },
    imageContainer:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center'
    }
});
export default styles;
