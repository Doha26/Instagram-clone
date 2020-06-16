import {Dimensions, StyleSheet} from "react-native";
import {colors} from "~/utils/theme";
const {width} = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    multipleSelect: {
        height: 35,
        borderRadius: 17.5,
        backgroundColor: "#404040",
        borderColor: colors.white,
        padding: 8,
        flexDirection: 'row',
        borderWidth: 2
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    dragContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    innerContainer: {},
    modal: {
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        flex: 1
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
        backgroundColor: colors.transparent,
        height: 80,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        borderWidth: 3,
        borderColor: '#ccc'
    },
    innerCircle: {
        backgroundColor: '#fff',
        height: 70,
        width: 70,
        alignSelf: 'center',
        borderRadius: 35,
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
    }, headerCamera: {
        borderRadius: 8,
        backgroundColor: colors.transparent,
        borderBottomWidth: 0,
        paddingLeft: 8
    },
    footerCamera: {
        flex: 20,
        backgroundColor: colors.transparent,
        borderTopWidth: 0,
        marginLeft: 20,
        marginRight: 20
    },
    imageBtnFooter: {
        width: 30,
        height: 30,
        borderRadius: 8,
        borderColor: colors.white,
        borderWidth: 2,
        overflow: "hidden"
    }, textFilter: {
        color: colors.white,
        fontWeight: 'bold',
        marginLeft: 10,
        fontSize: 13
    },
    absoluteFillBlur: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 100
    },
    absoluteFillView:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 400
    },
    headerBlur:{
        height: 100,
        marginLeft: 5,
        marginRight: 5,
        borderBottomWidth: 0,
        backgroundColor: colors.transparent
    },
    leftBtnBlur:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    blurImageStyle:{
        width: ((width / 3) - 4),
        marginLeft: 2,
        marginTop: 2,
        height: 200
    }


});
export default styles;
