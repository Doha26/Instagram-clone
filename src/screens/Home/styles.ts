import {Dimensions, StyleSheet} from "react-native";

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
    scrollView: {},
    storiesContainer: {
        flexDirection: 'row'
    },
    fragment: {
        flex: 1,
        flexDirection: 'column'
    },
    storyListContainer: {
        marginTop: 50
    },
    modal: {
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        flex: 1
    }
});
export default styles;
