import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image, Dimensions
} from 'react-native'
// @ts-ignore
import CameraRollPicker from '../cameraRollPicker/index';
// @ts-ignore
import ParallaxScrollView from 'react-native-parallax-scroll-view';

export default class GalleryView extends Component {


    constructor(props: any) {
        super(props);
        this.state = {
            galleryImagePath: false,
        }
    }

    getSelectedImages(image: any, current: any) {
        this.setState({galleryImagePath: current.uri});
    }

    render() {
        // @ts-ignore
        const {galleryImagePath, photos} = this.state;
        return (
            <View style={{flex: 1}}>
                <ParallaxScrollView
                    style={{flex: 1, backgroundColor: 'hotpink', overflow: 'hidden'}}
                    renderBackground={() => (
                        <View style={styles.galleryView}>
                            <View style={styles.imagePreview}>
                                {
                                    galleryImagePath
                                    &&
                                    <Image source={{uri: galleryImagePath}} style={{height: 400,}}/>

                                }
                            </View>
                        </View>
                    )}
                    renderFixedHeader={() => <Text
                        style={{textAlign: 'center', color: 'white', padding: 15, fontSize: 20}}></Text>}
                    parallaxHeaderHeight={350}
                    stickyHeaderHeight={55}
                >
                    <View style={{ alignItems: 'center' , width:Dimensions.get("window").width }}>
                        <CameraRollPicker
                            scrollRenderAheadDistance={100}
                            initialListSize={1}
                            pageSize={3}
                            removeClippedSubviews={true}
                            groupTypes='SavedPhotos'
                            maximum={1}
                            assetType='Photos'
                            imagesPerRow={3}
                            imageMargin={1}
                            callback={this.getSelectedImages.bind(this)}
                        />
                    </View>
                </ParallaxScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6AE2D',
    },
    content: {
        marginTop: 15,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    text: {
        fontSize: 16,
        alignItems: 'center',
        color: '#fff',
    },
    bold: {
        fontWeight: 'bold',
    },
    info: {
        fontSize: 12,
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    galleryView: {},
    imagePreview: {}
});
