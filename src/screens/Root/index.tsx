import React from 'react';
import {NavigationScreenProp, SafeAreaView} from 'react-navigation';
import {View, StyleSheet, StatusBar, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import {colors} from "../../utils/theme";
import {Button, Image} from "react-native-elements";
import Swiper from "../Add";
import {Content, Footer, Header, Icon, Left, Right, Text, Body} from "native-base";
import CameraView from "../../components/cameraView/CameraView";
import {RNCamera} from "react-native-camera";
import Modal from "../Search";
import Filters from '../../utils/filers'
import tags from "../../utils/tags";


export interface NavigationProps {
    navigation: NavigationScreenProp<any, any>
}

interface IProps extends NavigationProps {
}

export default class Root extends React.Component<IProps> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            camera: {
                //captureTarget: RNCamera.Constants.CaptureTarget.cameraRoll,
                type: RNCamera.Constants.Type.back,
                orientation: RNCamera.Constants.Orientation.auto,
                flashMode: RNCamera.Constants.FlashMode.auto,
            },
        };
    }

    get typeIcon() {
        let icon;
        const {back, front} = RNCamera.Constants.Type;
        if (this.state.camera.type === back) {
            icon = require('../../assets/images/ic_camera_rear_white.png');
        } else if (this.state.camera.type === front) {
            icon = require('../../assets/images/ic_camera_front_white.png');
        }
        return icon;
    }

    switchFlash = () => {
        let newFlashMode;
        const {auto, on, off} = RNCamera.Constants.FlashMode;

        if (this.state.camera.flashMode === auto) {
            newFlashMode = on;
        } else if (this.state.camera.flashMode === on) {
            newFlashMode = off;
        } else if (this.state.camera.flashMode === off) {
            newFlashMode = auto;
        }

        this.setState({
            camera: {
                ...this.state.camera,
                flashMode: newFlashMode,
            },
        });
    };

    get flashIcon() {
        let icon;
        const {auto, on, off} = RNCamera.Constants.FlashMode;

        if (this.state.camera.flashMode === auto) {
            icon = require('../../assets/images/ic_flash_auto_white.png');
        } else if (this.state.camera.flashMode === on) {
            icon = require('../../assets/images/ic_flash_on_white.png');
        } else if (this.state.camera.flashMode === off) {
            icon = require('../../assets/images/ic_flash_off_white.png');
        }

        return icon;
    }

    render() {

        return (
            <View style={styles.container}>
                <RNCamera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    style={styles.modal}
                    aspect={this.state.camera.aspect}
                    type={this.state.camera.type}
                    flashMode={this.state.camera.flashMode}
                    onFocusChanged={() => {
                    }}
                    onZoomChanged={() => {
                    }}
                    defaultTouchToFocus
                    mirrorImage={false}>
                    <Header rounded searchBar style={{
                        borderRadius: 8,
                        backgroundColor: colors.transparent,
                        borderBottomWidth: 0,
                        paddingLeft: 8
                    }}>
                        <Left>
                            <TouchableOpacity onPress={this.closeModal}>
                                <Icon type={"AntDesign"} fontSize={32} style={{color: colors.white}}
                                      name='setting'/>
                            </TouchableOpacity>
                        </Left>
                        <Body>
                        <Image style={{width: 30, height: 30}}
                               source={require('../../assets/images/ic_flash_auto_white.png')}
                        />
                        </Body>
                        <Right>
                            <TouchableOpacity>
                                <Icon type={"AntDesign"} fontSize={32} style={{color: colors.white}}
                                      name='close'/>
                            </TouchableOpacity>
                        </Right>
                    </Header>
                    <View style={[styles.bottomOverlay]}>
                        <View style={styles.frontCameraOverlay}>
                            <TouchableOpacity
                                style={styles.typeButton}
                                onPress={this.switchType}
                            >
                                <Image
                                    source={this.typeIcon}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.flashButton}
                                onPress={this.switchFlash}
                            >
                                <Image
                                    source={this.flashIcon}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonOverlay}>
                            <TouchableOpacity
                                style={styles.captureButton}
                                onPress={this.takePicture}
                            >
                                <View style={styles.outerCircle}>
                                    <View style={styles.innerCircle}>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <Footer style={{
                            flex:20,
                            backgroundColor: colors.transparent,
                            borderTopWidth: 0,
                            marginLeft: 20,
                            marginRight: 20
                        }}>
                            <Left style={{flex:4}}>
                                <TouchableOpacity>
                                    <View style={{overflow: 'hidden'}}>
                                        <Image style={{
                                            width: 30,
                                            height: 30,
                                            borderRadius: 8,
                                            borderColor: colors.white,
                                            borderWidth: 2,
                                            overflow: "hidden"
                                        }}
                                               source={require('../../assets/images/post1.png')}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </Left>
                            <Body style={{flex:16}}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}>
                                {
                                    Filters.map((filter: any) => (
                                        <TouchableOpacity key={filter.id}>
                                            <Text numberOfLines={1} key={filter.id}
                                                  style={{
                                                      color: colors.white,
                                                      fontWeight: 'bold',
                                                      marginLeft: 10,
                                                      fontSize: 13
                                                  }}>{filter.name.toUpperCase()}</Text>
                                        </TouchableOpacity>
                                    ))
                                }
                            </ScrollView>
                            {/* <Icon type={"Entypo"} fontSize={24} style={{color: colors.white}}
                                          name='chevron-down'/>*/}
                            </Body>
                            <Right style={{flex:4}}>
                                <TouchableOpacity>
                                    <Icon type={"MaterialCommunityIcons"} fontSize={54}
                                          style={{width: 39, height: 39, color: colors.white}}
                                          name='camera-retake'/>
                                </TouchableOpacity>
                            </Right>

                        </Footer>
                    </View>

                </RNCamera>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    modal: {
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        flex: 1
    },
    bottomOverlay: {
        position: 'absolute',
        right: 0,
        left: 0,
        alignItems: 'center',
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
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 40,
        borderWidth: 3,
        borderColor: '#ccc'
    },
    innerCircle: {
        backgroundColor: '#fff',
        height: 70,
        width: 70,
        alignSelf:'center',
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
    }

});
