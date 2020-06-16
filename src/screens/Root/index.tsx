import React from 'react';
import {NavigationScreenProp} from 'react-navigation';
import {
    Platform,
    View,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    Image,
    InteractionManager, findNodeHandle
} from 'react-native';
import VerticalSwipe from 'react-native-vertical-swipe';
import {colors} from "~/utils/theme";
import {BlurView} from "@react-native-community/blur";
import {Footer, Header, Icon, Left, Right, Text, Body, Container} from "native-base";
import {RNCamera} from "react-native-camera";
import Filters from '~/utils/datas/filers'
import CameraRoll from "@react-native-community/cameraroll";
import styles from "~/screens/Root/styles";


const {width} = Dimensions.get('window');

interface IProps {
    navigation: NavigationScreenProp<any, any>
}

export default class Root extends React.PureComponent<IProps, any> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            viewRef: null,
            images: [],
            camera: {
                type: RNCamera.Constants.Type.back,
                orientation: RNCamera.Constants.Orientation.auto,
                flashMode: RNCamera.Constants.FlashMode.auto,
            },
        };
    }

    componentDidMount(): void {
        const fetchParams = {
            first: 25,
        };
        CameraRoll.getPhotos(fetchParams).then((data: any) => {
            const assets = data.edges;
            const images = assets.map((asset: any) => asset.node.image);
            this.setState({
                tmpImages: images,
            });
            const imgArray: any = [];
            this.state.tmpImages.forEach(function (image: any, index: number) {
                imgArray.push({uri: image.uri, id: index, height: Math.round(Math.random() * 50 + 100)})
            });
            this.setState({images: imgArray});

            this.onBlurViewLoaded.bind(this)
        }).catch((err: any) => {
            console.log("Error retrieving photos");
        });
    }

    get typeIcon() {
        let icon;
        const {back, front} = RNCamera.Constants.Type;
        if (this.state.camera.type === back) {
            icon = require('~/assets/images/ic_camera_rear_white.png');
        } else if (this.state.camera.type === front) {
            icon = require('~/assets/images/ic_camera_front_white.png');
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
            icon = require('~/assets/images/ic_flash_auto_white.png');
        } else if (this.state.camera.flashMode === on) {
            icon = require('~/assets/images/ic_flash_on_white.png');
        } else if (this.state.camera.flashMode === off) {
            icon = require('~/assets/images/ic_flash_off_white.png');
        }

        return icon;
    }

    onBlurViewLoaded() {
        // Workaround for a tricky race condition on initial load.
        InteractionManager.runAfterInteractions(() => {
            setTimeout(() => {
                this.setState({viewRef: findNodeHandle(this.refs.blurContainer)});
            }, 500);
        });
    }

    renderBlurView = () => {
        const {images} = this.state;
        let blurView: any = null;
        if (Platform.OS === 'android') {
            blurView = (
                <View>
                    {this.state.viewRef && <BlurView
                        style={styles.absoluteFillBlur}
                        viewRef={this.state.viewRef}
                        blurType="light"
                        blurAmount={10}/>}
                    <View style={Object.assign({}, styles.innerContainer, styles.absoluteFillView)}>
                        <ScrollView>
                            <Container style={{backgroundColor: colors.blackFilter70}}>
                                <Header style={{
                                    height: 100,
                                    marginLeft: 5,
                                    marginRight: 5,
                                    borderBottomWidth: 0,
                                    backgroundColor: colors.transparent
                                }}>
                                    <Left>
                                        <TouchableOpacity>
                                            <View style={{
                                                flex: 1,
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <Text style={{fontSize: 14, color: colors.white}}>LAST
                                                    24 HOURS</Text>
                                                <Icon type={"MaterialCommunityIcons"} fontSize={28}
                                                      style={{color: colors.white}}
                                                      name='chevron-down'/>
                                            </View>
                                        </TouchableOpacity>
                                    </Left>
                                    <Right>
                                        <TouchableOpacity>
                                            <View style={styles.multipleSelect}>
                                                <Text style={{fontSize: 12, color: colors.white}}>SELECT
                                                    MULTIPLE</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </Right>
                                </Header>
                                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                    {this.state.images.map((image: any, index: number) => (
                                        <View key={index} style={{
                                            width: ((width / 3) - 4),
                                            marginLeft: 2,
                                            marginTop: 2,
                                            height: 200
                                        }}>
                                            <TouchableOpacity style={{flex: 1}}>
                                                <Image source={{url: image.uri}} style={{flex: 1}}/>
                                            </TouchableOpacity>
                                        </View>
                                    ))}

                                </View>
                            </Container>
                        </ScrollView>
                    </View>
                </View>
            );
        } else {
            blurView = (
                <BlurView
                    viewRef={this.state.viewRef}
                    blurType="light"
                    blurAmount={10}>
                    <View style={styles.innerContainer}>
                        <ScrollView>
                            <Container style={{backgroundColor: colors.blackFilter70}}>
                                <Header style={styles.headerBlur}>
                                    <Left>
                                        <TouchableOpacity>
                                            <View style={styles.leftBtnBlur}>
                                                <Text style={{fontSize: 14, color: colors.white}}>LAST
                                                    24 HOURS</Text>
                                                <Icon type={"MaterialCommunityIcons"} fontSize={28}
                                                      style={{color: colors.white}}
                                                      name='chevron-down'/>
                                            </View>
                                        </TouchableOpacity>
                                    </Left>
                                    <Right>
                                        <TouchableOpacity>
                                            <View style={styles.multipleSelect}>
                                                <Text style={{fontSize: 12, color: colors.white}}>SELECT
                                                    MULTIPLE</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </Right>
                                </Header>
                                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                    {images.map((image: any, index: number) => (
                                        <View key={index} style={styles.blurImageStyle}>
                                            <TouchableOpacity style={{flex: 1}}>
                                                <Image source={{url: image.uri}} style={{flex: 1}}/>
                                            </TouchableOpacity>
                                        </View>
                                    ))}

                                </View>
                            </Container>
                        </ScrollView>
                    </View>
                </BlurView>
            )
        }
        return blurView
    };

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <VerticalSwipe
                    style={styles.dragContainer}
                    content={(
                        <View style={styles.innerContainer}
                              ref={'blurContainer'}
                        >
                            <ScrollView>
                                {this.renderBlurView()}
                            </ScrollView>
                        </View>

                    )}>
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
                        <Header rounded searchBar style={styles.headerCamera}>
                            <Left>
                                <TouchableOpacity>
                                    <Icon type={"AntDesign"} fontSize={32} style={{color: colors.white}}
                                          name='setting'/>
                                </TouchableOpacity>
                            </Left>
                            <Body>
                                <Image style={{width: 30, height: 30}}
                                       source={require('~/assets/images/ic_flash_auto_white.png')}
                                />
                            </Body>
                            <Right>
                                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                                    <Icon type={"AntDesign"} fontSize={32} style={{color: colors.white}}
                                          name='close'/>
                                </TouchableOpacity>
                            </Right>
                        </Header>
                        <View style={styles.bottomOverlay}>
                            <View style={styles.buttonOverlay}>
                                <TouchableOpacity
                                    style={styles.captureButton}>
                                    <View style={styles.outerCircle}>
                                        <View style={styles.innerCircle}>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <Footer style={styles.footerCamera}>
                                <Left style={{flex: 4}}>
                                    <TouchableOpacity>
                                        <View style={{overflow: 'hidden'}}>
                                            <Image style={styles.imageBtnFooter}
                                                   source={require('~/assets/images/post1.png')}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                </Left>
                                <Body style={{flex: 16}}>
                                    <ScrollView
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}>
                                        {
                                            Filters.map((filter: any) => (
                                                <TouchableOpacity key={filter.id}>
                                                    <Text numberOfLines={1} key={filter.id}
                                                          style={styles.textFilter}>{filter.name.toUpperCase()}</Text>
                                                </TouchableOpacity>
                                            ))
                                        }
                                    </ScrollView>
                                </Body>
                                <Right style={{flex: 4}}>
                                    <TouchableOpacity>
                                        <Icon type={"MaterialCommunityIcons"} fontSize={54}
                                              style={{width: 39, height: 39, color: colors.white}}
                                              name='camera-retake'/>
                                    </TouchableOpacity>
                                </Right>

                            </Footer>
                        </View>
                    </RNCamera>
                </VerticalSwipe>
            </View>
        );
    }
}
