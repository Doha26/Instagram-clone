import React from 'react'
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {Image, Text} from "react-native-elements";
import {Button, Header, Icon, Left, Right, Title, Body} from 'native-base'
import {colors} from "~/utils/theme";

const HeaderToolbar: React.StatelessComponent = (props: any) => {
    return (
        <Header style={{backgroundColor: colors.white}}>
            <Left>
                <Button transparent style={{marginLeft:4}}>
                    {props.context == 'Home' ?
                        <TouchableOpacity onPress={props.onClicked}>
                            <Image style={{width: 32, height: 28}} source={require('~/assets/images/camera.png')}/>
                        </TouchableOpacity> :
                        <TouchableOpacity>
                        <Image style={{width: 32, height: 28}}
                               source={require('~/assets/images/chevron_left.png')}/>
                        </TouchableOpacity>}
                </Button>

            </Left>
            <Body>
            <TouchableOpacity>
                {props.context == 'Home' ?
                    <Image style={{width: 136, height: 39}} source={require('~/assets/images/insta.png')}/> :
                    <Text>{props.context}</Text>}
            </TouchableOpacity>
            </Body>
            <Right style={{marginRight:4}}>
                {props.context == 'Home' ? <TouchableOpacity>
                    <Image style={{width: 44, height: 44}} source={require('~/assets/images/tv.png')}/>
                </TouchableOpacity> : null}
                <TouchableOpacity style={{flexDirection: 'row', alignSelf: 'center', marginTop: 5}}>
                    <Image style={{width: 26, height: 26}} source={require('~/assets/images/direct.png')}/>
                </TouchableOpacity>
            </Right>
        </Header>

    );
};
export default HeaderToolbar;
