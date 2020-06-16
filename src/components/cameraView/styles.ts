import {Dimensions, StyleSheet} from "react-native";
import {colors} from "~/utils/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    },
    header: {
        height: 50,
        backgroundColor: colors.blackFilter70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    cancleBtn: {
        padding: 20
    },
    doneBtn: {
        padding: 20
    },
    closeImage: {
        height: 30,
        width: 30,
    },
    imageView: {
        paddingTop: 15
    },
    image: {
        height: 500,
        width: null
    },
    doneText: {
        position: 'absolute',
        right: 10,
    },
    bottomOverlay: {
        position: 'absolute',
        right: 0,
        left: 0,
        backgroundColor: colors.black,
        bottom: 0,
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    frontCameraOverlay: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: colors.transparent,
        justifyContent: 'space-between'
    },
    buttonOverlay: {
        height: 130,
        alignItems: 'center',
        backgroundColor: colors.black,
        justifyContent: 'center'
    },
    captureButton: {
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 20,
    },
    typeButton: {
        padding: 5,
    },
    flashButton: {
        padding: 5,
    },
    closeBtn: {
        height: 25,
        width: 25
    },
    outerCircle: {
        backgroundColor: '#ddd',
        height: 80,
        width: 80,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#ccc'
    },
    innerCircle: {
        backgroundColor: '#fff',
        height: 50,
        width: 50,
        borderRadius: 50,
        margin: 14,

    },
    recOuterCircle: {
        backgroundColor: '#ddd',
        height: 80,
        width: 80,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#918b8b'
    },
    recInnerCircle: {
        backgroundColor: '#e54242',
        height: 70,
        width: 70,
        borderRadius: 50,
        margin: 4
    },
    previewImage: {
        backgroundColor: 'red'
    }
});

export default styles;
