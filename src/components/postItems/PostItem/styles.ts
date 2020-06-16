import {StyleSheet} from "react-native";
import {colors} from "~/utils/theme";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderBottomColor: colors.exlight_gray,
        backgroundColor: colors.white,
        borderTopColor: colors.exlight_gray,
        borderBottomWidth: 1
    },
    animatedIcon: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1200,
        borderRadius: 160,
        opacity:0
    },
    icon: {
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerProfilePhoto: {
        height: 48,
        flexDirection: 'column',
        width: 48,
        borderRadius: 24,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        height: 46,
        width: 46,
        position: 'relative',
        backgroundColor: colors.white,
        borderRadius: 23,
        zIndex: 100
    },
    flexStartAligned: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    flexEndAligned: {
        flexDirection: 'row',
        flex: 3,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    cardHeader: {
        flexDirection: 'row',
        padding: 20,
        height: 70
    },
    statContainer: {
        flexDirection: 'column',
        flex: 6,
        paddingLeft: 10,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    cardStatsCounter: {
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15
    },
    cardActionContainer: {
        flexDirection: 'row',
        padding: 15
    },
    postAuthor: {
        fontSize: 14,
        marginLeft: 5,
        fontWeight: 'bold'
    },
    postTime: {
        fontSize: 13,
        marginTop: 4,
        marginLeft: 5,
        color: colors.dark_gray
    },
    blueText: {
        color: colors.lightBlue
    },
    buttonMore: {
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        flexGrow: 1
    },
    likeCounter: {
        fontSize: 15,
        fontWeight: '400',
        color: colors.black
    },
    viewMoreBtn: {
        fontSize: 14,
        fontWeight: '600',
        marginTop: 4,
        color: colors.dark_gray
    },
    commentCounter: {
        fontSize: 14,
        marginLeft: 5,
        marginTop: 13,
        color: colors.black
    }
    ,
    viewMoreText: {
        marginRight: 20,
        lineHeight: 20,
        fontSize: 14,
        marginTop: 10,
        color: colors.black
    }, videoView: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});

export default styles;
