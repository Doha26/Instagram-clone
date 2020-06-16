import React from 'react';
import {
    View,
    Text,
    Image, Dimensions
} from 'react-native'
import CameraRollPicker from '~/components/cameraRollPicker/index';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import styles from "~/components/GalleryView/styles";

export default class GalleryView extends React.PureComponent<any,any> {


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
                    renderFixedHeader={() =>
                        <Text
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

