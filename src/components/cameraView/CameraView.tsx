import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    View,
    Animated, Dimensions,

} from 'react-native'
import {RNCamera} from 'react-native-camera';
import RNFetchBlob from 'react-native-fetch-blob';
import {colors} from "../../utils/theme";
import {Toast} from "native-base";


export default class CameraView extends Component {
    constructor(props: any) {
        super(props);
        this.camera = null;

        this.state = {
            camera: {
                //captureTarget: RNCamera.Constants.CaptureTarget.cameraRoll,
                type: RNCamera.Constants.Type.back,
                orientation: RNCamera.Constants.Orientation.auto,
                flashMode: RNCamera.Constants.FlashMode.auto,
            },
            galleryImagePath: false,
            cameraImagePath: false,
            isRecording: false,
            isCameraButton: false,
            animated: new Animated.Value(0),
            opacityA: new Animated.Value(1),
        };
    }

    takePicture = () => {
        if (this.camera) {
            const options = {quality: 0.5, base64: true};
            this.camera.takePictureAsync(options)
                .then((data: any) => {

                    alert(data.uri);
                    const d = new Date();
                    var timestamp = d.getTime();
                    RNFetchBlob.fs.readFile(data.uri, 'base64')
                        .then((data) => {
                            this.setState({cameraImagePath: `data:image/jpg;base64,${data}`});
                        });
                })
                .catch((err: any) => console.error(err));
        }
    };

    switchType = () => {
        let newType;
        const {back, front} = RNCamera.Constants.Type;

        if (this.state.camera.type === back) {
            newType = front;
        } else if (this.state.camera.type === front) {
            newType = back;
        }

        this.setState({
            camera: {
                ...this.state.camera,
                type: newType,
            },
        });
    };

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

    getSelectedImages(image: any, current: any) {
        console.log("====image path ===", current.uri)
        this.setState({galleryImagePath: current.uri});

        // RNFetchBlob.fs.readFile(current.uri, 'base64')
        // .then((data) => {
        //   console.log("===base64 ====",data)
        //   this.setState({galleryImagePath:`data:image/jpg;base64,${data}`});
        // });
    }

    startRecording = () => {
        if (this.camera) {
            this.camera.recordAsync()
                .then((data: any) => console.log("======data path===== ", data.path))
                .catch((err: any) => console.error("==error==", err));
            this.setState({
                isRecording: true
            });
        }
    };

    stopRecording = () => {
        if (this.camera) {
            this.camera.stopRecording();
            this.setState({
                isRecording: false
            });
        }
    };

    cancleImage() {
        this.setState({cameraImagePath: false})
    }


    renderCamera() {
        if (!this.state.cameraImagePath) {
            return (
                <RNCamera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    style={styles.preview}
                    aspect={this.state.camera.aspect}
                    type={this.state.camera.type}
                    flashMode={this.state.camera.flashMode}
                    onFocusChanged={() => {
                    }}
                    onZoomChanged={() => {
                    }}
                    defaultTouchToFocus
                    mirrorImage={false}
                >
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
                    </View>
                </RNCamera>
            );
        }
        if (this.state.cameraImagePath) {
            return (
                <View style={{flex: 1, padding: 0}}>
                    <View style={styles.header}>
                        <View>
                            <TouchableOpacity onPress={this.cancleImage.bind(this)}>
                                <Image source={require('../../assets/images/close.png')} style={styles.closeBtn}/>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text>Done </Text>
                        </View>
                    </View>
                    <View style={styles.previewImage}>
                        <Image source={{uri: this.state.cameraImagePath}} style={{height: 300}}/>
                    </View>
                </View>
            );
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderCamera()}
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    },
    header: {
        height: 50,
        backgroundColor: colors.blackFilter70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    cancleBtn: {
        padding: 20
    },
    doneBtn: {
        padding: 20
    },
    closeImage: {
        height: 30,
        width: 30,
    },
    imageView: {
        paddingTop: 15
    },
    image: {
        height: 500,
        width: null
    },
    doneText: {
        position: 'absolute',
        right: 10,
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
        backgroundColor: '#ddd',
        height: 80,
        width: 80,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#ccc'
    },
    innerCircle: {
        backgroundColor: '#fff',
        height: 50,
        width: 50,
        borderRadius: 50,
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
