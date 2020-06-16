import React from 'react'
import {StyleSheet, TouchableOpacity, View , Text} from "react-native";
import {Avatar} from 'react-native-elements';
import {colors} from "~/utils/theme";
import LinearGradient from "react-native-linear-gradient";
import SvgUri from "react-native-svg-uri";
import styles from "~/components/storyItems/storyItem/styles";

const StoryItem: React.StatelessComponent = (props:any) => {

    return (
        props.isBtnProfile ?
            <TouchableOpacity style={{marginLeft:10}}>
                <View style={styles.containerProfile} >
                    <Avatar rounded size="large"
                            containerStyle={styles.avatarProfile}
                            source={require('~/assets/images/ic11.png')}
                    />
                    <View style={styles.btnPlusBg}>
                        <SvgUri  style={styles.btnPlus} source={require('~/assets/svg/plus.svg')}/>
                    </View>

                </View>
                <Text style={styles.profileName}>{props.title}</Text>
            </TouchableOpacity>
            :
            <View style={{alignItems:'center', justifyContent:'center'}}>
                <LinearGradient
                    colors={[colors.turkois,colors.extraLightRed, colors.orangeLight]}
                    style={{ height: 76, width: 76, alignItems: 'center', justifyContent: 'center', borderRadius:38 , marginLeft:15}}
                >
                    <TouchableOpacity onPress={props.clicked}>
                        <View style={styles.container} >
                            <Avatar rounded size="large"
                                    containerStyle={styles.avatar}
                                    source={props.image}
                            />
                        </View>
                    </TouchableOpacity>
                </LinearGradient>
                {
                    props.isLive ? <View style={{justifyContent:'center', marginLeft:15,alignItems:'center',flexDirection:'column'}}>
                            <LinearGradient
                                colors={[colors.turkois,colors.extraLightRed, colors.orangeLight]}
                                style={styles.btnLive}
                            >
                                <Text style={styles.textLive}>LIVE</Text>
                            </LinearGradient>

                        </View>
                        : null
                }
                <Text style={styles.profileName}>{props.name}</Text>
            </View>

    );

};

export default StoryItem;
