import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput, Dimensions, TouchableOpacity, Platform, KeyboardAvoidingView, ScrollView
} from "react-native";
import {Body, Button, Container, Content, Footer, Header, Left, Right} from "native-base";
import {colors} from "~/utils/theme";
import styles from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationScreenProp} from "react-navigation";

interface IProps {
    navigation: NavigationScreenProp<any, any>
}

export default class Signup extends React.PureComponent<IProps, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            emailOrPhone: "",
            password: "",
            username: "",
            name: "",
            validate: null
        }
    }

    // @ts-ignore
    componentDidUpdate() {
        this.validate();
    }

    validate = () => {
        const {emailOrPhone, password, username, name} = this.state;

        if (emailOrPhone.length > 5 && password.length > 5 && username && name) {
            this.setState({
                validate: true
            })
        } else {
            this.setState({
                validate: false
            })
        }
    }

    render() {
        const {validate} = this.state
        const {navigation} = this.props;

        return (
            <KeyboardAvoidingView style={styles.container}
                                  behavior={Platform.OS == "ios" ? "padding" : "height"}>
                <ScrollView centerContent>
                <View style={{flex: 1, justifyContent: 'center'}}>

                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.logo}>Instagram</Text>
                    </View>
                    <View>
                        <TextInput
                            style={styles.textInput}
                            placeholder={"Phone or e-mail"}
                            onChangeText={(text) => this.setState({emailOrPhone: text})}
                        />

                        <TextInput
                            style={styles.textInput}
                            placeholder={"Name and Surname"}
                            onChangeText={(text) => this.setState({name: text})}
                        />

                        <TextInput
                            style={styles.textInput}
                            placeholder={"Username"}
                            onChangeText={(text) => this.setState({username: text})}
                        />

                        <TextInput
                            secureTextEntry
                            style={styles.textInput}
                            placeholder={"Password"}
                            onChangeText={(text) => this.setState({password: text})}
                        />
                    </View>
                    <View style={styles.loginView} opacity={validate ? 1 : 0.2}>
                        <Text style={styles.loginText}>Signup</Text>
                    </View>

                    <View>
                        <View style={{marginTop: 15}}>
                            <Text style={styles.policy}>
                                By registering, you agree to the <Text style={styles.boldText}>Terms , Data
                                Policy </Text>{"\n"}and <Text style={styles.boldText}>Cookies Policy</Text>.
                            </Text>
                        </View>
                        <View style={styles.orView}>
                            <Text style={styles.orViewText}>
                                Or
                            </Text>
                        </View>
                        <View style={styles.loginFacebookView}>
                            <Icon name="facebook-square" size={30} color="#385185"/>
                            <Text style={styles.loginFacebookText}>
                                Signup with Facebook
                            </Text>
                        </View>
                    </View>
                </View>
                </ScrollView>
                <View style={styles.dontHaveAccountView}>
                    <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                        <Text style={{color: '#666'}}>
                            Do you have an account?
                            {" "}
                            <Text style={styles.signInOrUpText}>Signin</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}




