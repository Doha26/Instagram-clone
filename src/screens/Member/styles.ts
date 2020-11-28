import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center'
    },
    textInput: {
        height: 50,
        borderColor: '#dbdbdb',
        borderWidth: 1,
        margin: 10,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 3,
        padding: 10,
        backgroundColor: "#fafafa"
    },
    logo: {
        fontSize: 50,
        fontFamily: 'Billabong',
        marginBottom: 20,
    },
    dontHaveAccountView: {
        alignItems: 'center',
        height: 50,
        borderTopWidth: 1,
        borderColor: '#ddd',
        justifyContent: 'center'
    },
    loginFacebookView: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginFacebookText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        color: '#385185',
        paddingLeft: 10
    },
    orView: {
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        borderColor: "#999"
    },
    orViewText: {
        textAlign: 'center',
        backgroundColor: '#FFF',
        paddingLeft: 10,
        paddingRight: 10,
        color: "#999",
        transform: [
            {translateY: 8}
        ]
    },
    forgetPasswordText: {
        color: "#999",
        textAlign: 'center'
    },
    loginView: {
        alignItems: 'center',
        backgroundColor: '#0095f6',
        borderWidth: 1,
        borderColor: 'transparent',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
    },
    loginText: {
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    policy: {
        textAlign: 'center',
        justifyContent: 'center',
        color: "#999",
    },
    signInOrUpText: {
        fontWeight: 'bold',
        color: '#385185',
        marginLeft: 5,
        paddingLeft: 5,
    },
    boldText: {
        fontWeight: 'bold'
    },
    passwordView: {
        flexDirection: 'row',
        paddingBottom: 10,
        height: 50,
        borderColor: '#dbdbdb',
        borderWidth: 1,
        margin: 10,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 3,
        padding: 10,
        backgroundColor: "#fafafa"
    },
    inputIcon: {
        flex: 1,
    },
});
export default styles;
