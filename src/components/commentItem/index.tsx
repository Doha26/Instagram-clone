import React from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import {Avatar, Text} from "react-native-elements";
import {colors} from "../../utils/theme";
import Separator from "../../components/separator/index";

const CommentItem: React.StatelessComponent = (props: any) => {
    return (
        <View>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                marginTop:10,
                marginLeft: props.context !== 'Home' ? 20 : 4,
                marginRight: props.context !== 'Home' ? 20 : 4
            }}>
                {props.context !== 'Home' ? <TouchableOpacity style={{justifyContent: 'center'}}>
                    <Avatar
                        containerStyle={styles.avatarStyle}
                        rounded
                        source={require('../../assets/images/ic8.png')}
                    />
                </TouchableOpacity> : null}
                <Text numberOfLines={props.linesType == "multilines" ? props.numberOfLines : 1}
                      style={Object.assign({}, styles.commentRow, {marginLeft: props.context !== 'Home' ? 23 : 0})}><Text
                    style={styles.author}>@{props.author}</Text>{` ${props.message}`}</Text>
            </View>
            <View style={styles.cardStatsCounter}>
                <View style={Object.assign({}, styles.flexStartAligned, {flex: 7})}>
                    <Text style={styles.hour}>7h</Text>
                    {
                        props.likeCount > 0 ? <Text style={styles.likes}>12 Likes</Text> : null
                    }
                    <TouchableOpacity>
                        <Text style={styles.commentCounter}>Reply</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {

                props.context != 'Home' && props.canReply ? (
                    <View>
                        <View style={styles.replyContainer}>
                            <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center'}}>
                                <View style={{
                                    width: 25,
                                    height: 2,
                                    backgroundColor: colors.dark_gray,
                                    alignSelf: 'center'
                                }}/>
                                <Text style={{
                                    marginLeft: 10, fontSize: 13,
                                    fontWeight: 'bold',
                                    color: colors.dark_gray
                                }}>Hide replies</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginLeft: 30}}>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                marginLeft: props.context !== 'Home' ? 20 : 4,
                                marginRight: props.context !== 'Home' ? 20 : 4
                            }}>
                                {props.context !== 'Home' ? <TouchableOpacity style={{justifyContent: 'center'}}>
                                    <Avatar
                                        containerStyle={styles.avatarStyle}
                                        rounded
                                        source={require('../../assets/images/ic8.png')}
                                    />
                                </TouchableOpacity> : null}
                                <Text numberOfLines={props.linesType == "multilines" ? props.numberOfLines : 1}
                                      style={Object.assign({}, styles.commentRow, {marginLeft: props.context !== 'Home' ? 23 : 0})}><Text
                                    style={styles.author}>@{props.author}</Text>{` ${props.message}`}</Text>
                            </View>
                            <View style={styles.cardStatsCounter}>
                                <View style={Object.assign({}, styles.flexStartAligned, {flex: 7})}>
                                    <Text style={styles.hour}>7h</Text>
                                    <Text style={styles.likes}>12 Likes</Text>
                                    <TouchableOpacity>
                                        <Text style={styles.commentCounter}>Reply</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                ) : null
            }

        </View>

    );
};
const styles = StyleSheet.create({
    commentRow: {
        lineHeight: 20,
        fontSize: 14,
        color: colors.black,
    },
    author: {
        fontWeight: 'bold',
        color: colors.black
    },
    flexStartAligned: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatarStyle: {
        position: 'absolute',
        top: 0,
        width: 30,
        height: 30,
        alignSelf: 'center',
        borderRadius: 15,
    },
    cardStatsCounter: {
        flexDirection: 'row',
        marginLeft: 40,
        marginTop: 5
    },
    hour: {
        fontSize: 13,
        fontWeight: 'bold',
        color: colors.dark_gray,
    },
    likes: {
        fontSize: 13,
        marginLeft: 10,
        fontWeight: 'bold',
        color: colors.dark_gray
    },
    commentCounter: {
        fontSize: 13,
        marginLeft: 10,
        fontWeight: 'bold',
        color: colors.dark_gray
    },
    replyContainer: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 30,
        flexDirection: 'row'
    }
});

export default CommentItem;
