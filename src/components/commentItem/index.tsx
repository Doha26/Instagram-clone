import React from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import {Avatar, Text} from "react-native-elements";
import {colors} from "~/utils/theme";
import styles from "~/components/commentItem/styles";

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
                        source={require('~/assets/images/ic8.png')}
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
                                        source={require('~/assets/images/ic8.png')}
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

export default CommentItem;
