import React from 'react';
import {
    View,
    Text,
    TextInput, TouchableOpacity, KeyboardAvoidingView, Platform
} from "react-native";
import styles from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationScreenProp} from "react-navigation";


interface IProps {
    navigation: NavigationScreenProp<any, any>
}

export default class Signin extends React.PureComponent<IProps, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            emailOrPhone: "",
            password: "",
            showPassword: false,
            isValid: false
        }
    }

    // @ts-ignore
    componentDidUpdate() {
        this.validate();
    }

    validate = () => {
        const {emailOrPhone, password} = this.state;

        this.setState({isValid: emailOrPhone.length > 5 && password.length > 5})
    }


    render() {
        const {isValid, showPassword} = this.state
        const {navigation} = this.props;

        return (
            <KeyboardAvoidingView style={styles.container}
                                  behavior={Platform.OS == "ios" ? "padding" : "height"}>
                <View style={{flex: 1, justifyContent: 'center'}}>

                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.logo}>Instagram</Text>
                    </View>
                    <View>
                        <TextInput
                            style={styles.textInput}
                            placeholder={"Phone, e-mail or username"}
                            onChangeText={text => this.setState({emailOrPhone: text})}
                        />
                        <View style={styles.passwordView}>
                            <TextInput
                                style={styles.inputIcon}
                                autoCorrect={false}
                                onChangeText={text => this.setState({password: text})}
                                secureTextEntry={showPassword ? false : true}
                                placeholder="Password"
                            />

                            <Icon
                                onPress={() => this.setState({showPassword: !showPassword})}
                                name={showPassword ? "eye" : "eye-slash"}
                                color='#dbdbdb'
                                size={30}
                            />
                        </View>
                    </View>
                    <View style={styles.loginView} opacity={isValid ? 1 : 0.2}>
                        <TouchableOpacity disabled={isValid}
                                          onPress={() => navigation.navigate("Home")}>
                            <Text style={styles.loginText}>Login</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <View style={{marginTop: 15}}>
                            <Text style={styles.forgetPasswordText}>Forget Password?</Text>
                        </View>
                        <View style={styles.orView}>
                            <Text style={styles.orViewText}>
                                Or
                            </Text>
                        </View>
                        <View style={styles.loginFacebookView}>
                            <Icon name="facebook-square" size={30} color="#385185"/>
                            <Text style={styles.loginFacebookText}>
                                Signin with Facebook
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.dontHaveAccountView}>
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                        <Text style={{color: '#666'}}>
                            Don't you have an account?
                            {" "}
                            <Text style={styles.signInOrUpText}>Signup</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}




