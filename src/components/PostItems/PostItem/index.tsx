import React, {Component} from 'react';
import {
    TouchableOpacity, View,
    StyleSheet,
    Text,
    Image
} from "react-native";
import {colors} from "../../../utils/theme";
import SvgUri from "react-native-svg-uri";
import {Avatar} from "react-native-elements";
import ViewMoreText from 'react-native-view-more-text';
import LinearGradient from "react-native-linear-gradient";

interface IPostItemProps {
    avatar: String,
    author: String,
    time: String,
    image: String,
    likeCount: String,
    commentCount: String,
    shareCount: String,

    text: String,

    isImage: boolean,
    isVideo: boolean,
    isText: boolean
}

class PostItem extends React.Component<IPostItemProps> {

    constructor(props: IPostItemProps) {
        super(props);
    }

    render() {
        const {avatar, author, time, image, likeCount, commentCount, shareCount, text,isImage, isVideo, isText} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.cardHeader}>

                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <LinearGradient
                            colors={[colors.turkois,colors.extraLightRed, colors.orangeLight]}
                            style={{ height: 50, width: 50, alignItems: 'center', justifyContent: 'center', borderRadius:25 , marginLeft:1}}
                        >
                            <TouchableOpacity>
                                <View style={styles.containerProfilePhoto} >
                                    <Avatar
                                            containerStyle={styles.avatar}
                                            rounded
                                            size={"medium"}
                                            source={avatar}
                                    />
                                </View>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                    <View style={styles.statContainer}>
                        <Text style={styles.postAuthor}>{author}</Text>
                    </View>
                    <TouchableOpacity style={{alignSelf: 'flex-end', flex: 1}}>
                        <SvgUri source={require('../../../assets/svg/more.svg')} style={styles.buttonMore}/>
                    </TouchableOpacity>
                </View>
                <View style={{paddingLeft: isText ? 20 : 0}}>
                    {isImage ?
                        <Image source={image}/> : null}
                    {isVideo ?
                        <TouchableOpacity
                            style={{position: 'absolute', top: 70, alignSelf: 'center', justifyContent: 'center'}}>
                            <SvgUri width="80"
                                    height="80"
                                    source={require('../../../assets/svg/play_video.svg')}
                            />
                        </TouchableOpacity>
                        : null}

                    {isText ?
                        <ViewMoreText
                            numberOfLines={5}
                            renderViewMore={this.renderViewMore}
                            renderViewLess={this.renderViewLess}
                            textStyle={{textAlign: 'justify', marginRight: 20 , lineHeight:25 , fontSize:15}}>
                            <Text>
                                {text}
                            </Text>
                        </ViewMoreText>
                    :null}

                </View>
                <View style={styles.cardActionContainer}>
                    <TouchableOpacity>
                        <Image style={{width: 26, height: 26}}
                               source={require('../../../assets/images/heart_red.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft:16}}>
                        <Image style={{width: 26, height: 26}}
                               source={require('../../../assets/images/comment.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft:16}}>
                        <Image style={{width: 32, height: 26}}
                               source={require('../../../assets/images/direct.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.flexEndAligned}>
                        <Image style={{width: 22, height: 25}}
                               source={require('../../../assets/images/collection.png')}/>
                    </TouchableOpacity>

                </View>
                <View style={styles.cardStatsCounter}>
                    <View style={Object.assign({}, styles.flexStartAligned, {flex: 7})}>
                        <Text style={styles.likeCounter}>{likeCount}</Text>
                        <Text style={styles.commentCounter}>{commentCount}</Text>
                    </View>
                    <View style={{alignSelf: 'flex-end', flex: 2}}>
                        <Text style={styles.commentCounter}>{shareCount}</Text>
                    </View>
                </View>


            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderBottomColor: colors.exlight_gray,
        backgroundColor: colors.white,
        borderTopColor: colors.exlight_gray,
        borderBottomWidth: 1,
        borderTopWidth: 1
    },
    containerProfilePhoto: {
        height: 48,
        flexDirection: 'column',
        width: 48,
        borderRadius:24,
        backgroundColor:colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        height: 46,
        width: 46,
        position:'relative',
        backgroundColor:colors.white,
        borderRadius: 23,
        zIndex:100
    },
    flexStartAligned: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    flexEndAligned: {
        flexDirection: 'row',
        flex: 3,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    cardHeader: {
        flexDirection: 'row',
        padding: 20,
        height: 70
    },
    statContainer: {
        flexDirection: 'column',
        flex: 6,
        paddingLeft: 10,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    cardStatsCounter: {
        flexDirection: 'row',
        padding: 15,
        height: 45
    },
    cardActionContainer: {
        flexDirection: 'row',
        padding:15
    },
    postAuthor: {
        fontSize: 14,
        marginLeft: 5,
        fontWeight:'bold'
    },
    postTime: {
        fontSize: 13,
        marginTop: 4,
        marginLeft: 5,
        color: colors.dark_gray
    },
    blueText: {
        color: colors.filterBlue
    },
    buttonMore: {
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        flexGrow: 1
    },
    likeCounter: {
        fontSize: 14,
        marginLeft: 5,
        color: colors.dark_gray
    },
    commentCounter: {
        fontSize: 14,
        marginLeft: 5,
        color: colors.dark_gray
    }
    ,
    viewMoreText: {
        marginLeft: 10,
        left: 10,
        color: colors.green
    }
});

export default PostItem;
