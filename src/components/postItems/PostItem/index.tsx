import React, {Component} from 'react';
import {
    TouchableOpacity, View,
    StyleSheet,
    Text,
    Image, Dimensions
} from "react-native";
import {colors} from "../../../utils/theme";
import SvgUri from "react-native-svg-uri";
import {Avatar} from "react-native-elements";
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/AntDesign'
// @ts-ignore
import Video from 'react-native-video';
import LinearGradient from "react-native-linear-gradient";
import {generateHiperlinkText} from "../../../utils/methods";
import CommentItem from "../../commentItem";
import AvatarInput from "../../avatarInput";

interface IPostItemProps {
    avatar: String,
    author: String,
    time: String,
    image: String,
    likeCount: String,
    commentCount: String,
    shareCount: String,
    videoUrl: string,

    text: String,

    isImage: boolean,
    isVideo: boolean,
    isText: boolean
}

const AnimatedIcon = Animatable.createAnimatableComponent(Icon);

class PostItem extends React.Component<IPostItemProps> {
    private player: any;

    constructor(props: IPostItemProps) {
        super(props);
        this.state = {
            liked: false
        };
        this.lastPress = 0
    }

    handleLargeAnimatedIconRef = (ref: any) => {
        this.largeAnimatedIcon = ref
    };

    handleSmallAnimatedIconRef = (ref: any) => {
        this.smallAnimatedIcon = ref
    };

    animateIcon = () => {
        const {liked} = this.state;
        this.largeAnimatedIcon.stopAnimation();

        if (liked) {
            this.largeAnimatedIcon.bounceIn()
                .then(() => this.largeAnimatedIcon.bounceOut())
            this.smallAnimatedIcon.pulse(200)
        } else {
            this.largeAnimatedIcon.bounceIn()
                .then(() => {
                    this.largeAnimatedIcon.bounceOut()
                    this.smallAnimatedIcon.bounceIn()
                })
                .then(() => {
                    if (!liked) {
                        this.setState(prevState => ({liked: !prevState.liked}))
                    }
                })
        }
    };

    handleOnPress = () => {
        const time = new Date().getTime();
        const delta = time - this.lastPress;
        const doublePressDelay = 400;
        if (delta < doublePressDelay) {
            this.animateIcon()
        }
        this.lastPress = time
    };

    handleOnPressLike = () => {
        this.smallAnimatedIcon.bounceIn();
        this.setState(prevState => ({liked: !prevState.liked}))
    };

    onBuffer = () => {
        // alert("Buffer");
    };
    onError = () => {
        // alert("Unable to load video");
    };

    openComments = () => {
        console.log(this.props);
        this.props.navigation.navigate('Comments');
    };

    render() {
        const {avatar, author, time, image, likeCount, commentCount, shareCount, text, isImage, isVideo, isText, videoUrl} = this.props;
        const {liked} = this.state;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={this.handleOnPress}>

                    <View style={styles.cardHeader}>
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <LinearGradient
                                colors={[colors.turkois, colors.extraLightRed, colors.orangeLight]}
                                style={{
                                    height: 50,
                                    width: 50,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 25,
                                    marginLeft: 1
                                }}
                            >
                                <TouchableOpacity>
                                    <View style={styles.containerProfilePhoto}>
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
                    <View style={{paddingLeft: isText ? 20 : 0,justifyContent: 'center',
                        alignItems: 'center'}}>
                        <AnimatedIcon
                            ref={this.handleLargeAnimatedIconRef}
                            name="heart"
                            color={colors.white}
                            size={80}
                            style={styles.animatedIcon}
                            duration={500}
                            delay={200}
                        />
                        {isImage ?

                            <Image source={image} style={{height: 270}}/> : null}
                        {isVideo ?
                            <Video source={{uri: videoUrl}}   // Can be a URL or a local file.
                                   ref={(ref: any) => {
                                       this.player = ref
                                   }}
                                   paused={true}
                                   controls={true}
                                   onBuffer={this.onBuffer}                // Callback when remote video is buffering
                                   onError={this.onError}               // Callback when video cannot be loaded
                                   style={{width: Dimensions.get('window').width, height: 270}}/>
                            : null}
                    </View>
                    <View style={styles.cardActionContainer}>
                        <TouchableOpacity>
                            {/*
                        <Image style={{width: 26, height: 26}}
                               source={require('../../../assets/images/heart_red.png')}/>
                        */}

                            <AnimatedIcon
                                ref={this.handleSmallAnimatedIconRef}
                                name={liked ? 'heart' : 'hearto'}
                                color={liked ? colors.darkRed : null}
                                size={26}
                                onPress={this.handleOnPressLike}
                                style={styles.icon}
                            />

                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft: 16}}>
                            <Image style={{width: 26, height: 26}}
                                   source={require('../../../assets/images/comment.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft: 16, marginTop: 2}}>
                            <Image style={{width: 26, height: 26}}
                                   source={require('../../../assets/images/direct.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.flexEndAligned}>
                            <Image style={{width: 22, height: 25}}
                                   source={require('../../../assets/images/collection.png')}/>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.cardStatsCounter}>
                        <View style={Object.assign({})}>
                            <Text style={styles.likeCounter}>{likeCount}</Text>
                            {
                                generateHiperlinkText(
                                    <Text
                                        style={styles.viewMoreText}
                                        numberOfLines={2}>
                                        @Ivana_ivanka 😜🙌🔥, #party🔥🔥, #people,#artist,#friendzone;
                                        #blackistbeautiful,
                                        #ogclub
                                    </Text>
                                )
                            }
                            <TouchableOpacity>
                                <Text onPress={this.openComments}
                                      style={styles.viewMoreBtn}> View {`${commentCount} comments`}</Text>
                            </TouchableOpacity>
                            <CommentItem linesType="singleLine" context="Home" NumberOfLines={1} author="setoo9"
                                         message="❤️❤️❤️ Awesome work. keep up✨"/>
                            <AvatarInput/>
                        </View>
                    </View>
                </TouchableOpacity>
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
        borderBottomWidth: 1
    },
    animatedIcon: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1200,
        borderRadius: 160,
        opacity:0
    },
    icon: {
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerProfilePhoto: {
        height: 48,
        flexDirection: 'column',
        width: 48,
        borderRadius: 24,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        height: 46,
        width: 46,
        position: 'relative',
        backgroundColor: colors.white,
        borderRadius: 23,
        zIndex: 100
    },
    flexStartAligned: {
        flex: 1,
        justifyContent: 'flex-start',
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
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15
    },
    cardActionContainer: {
        flexDirection: 'row',
        padding: 15
    },
    postAuthor: {
        fontSize: 14,
        marginLeft: 5,
        fontWeight: 'bold'
    },
    postTime: {
        fontSize: 13,
        marginTop: 4,
        marginLeft: 5,
        color: colors.dark_gray
    },
    blueText: {
        color: colors.lightBlue
    },
    buttonMore: {
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        flexGrow: 1
    },
    likeCounter: {
        fontSize: 15,
        fontWeight: '400',
        color: colors.black
    },
    viewMoreBtn: {
        fontSize: 14,
        fontWeight: '600',
        marginTop: 4,
        color: colors.dark_gray
    },
    commentCounter: {
        fontSize: 14,
        marginLeft: 5,
        marginTop: 13,
        color: colors.black
    }
    ,
    viewMoreText: {
        marginRight: 20,
        lineHeight: 20,
        fontSize: 14,
        marginTop: 10,
        color: colors.black
    }, videoView: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});

export default PostItem;
