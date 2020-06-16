import {StyleSheet} from "react-native";
import {colors} from "~/utils/theme";

const styles = StyleSheet.create({
    commentRow: {
        lineHeight: 20,
        fontSize: 14,
        color: colors.black,
    },
    author: {
        fontWeight: 'bold',
        color: colors.black
    },
    flexStartAligned: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatarStyle: {
        position: 'absolute',
        top: 0,
        width: 40,
        height: 40,
        borderColor: colors.light_gray,
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 20,
    },
    cardStatsCounter: {
        flexDirection: 'row',
        marginLeft: 40,
        marginTop: 5
    },
    hour: {
        fontSize: 13,
        fontWeight: 'bold',
        color: colors.dark_gray,
    },
    likes: {
        fontSize: 13,
        marginLeft: 10,
        fontWeight: 'bold',
        color: colors.dark_gray
    },
    commentCounter: {
        fontSize: 13,
        marginLeft: 10,
        fontWeight: 'bold',
        color: colors.dark_gray
    },
    replyContainer: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 30,
        flexDirection: 'row'
    }
});

export default styles;
