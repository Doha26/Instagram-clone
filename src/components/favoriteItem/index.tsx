import React from "react";
import {View, StyleSheet, TouchableOpacity, Dimensions} from "react-native";
import {Avatar, Text} from "react-native-elements";
import {colors} from "../../utils/theme";
import {Left, Right, Body, Button} from "native-base";
import {generateHiperlinkTextWithTime} from "../../utils/methods";

const FavoriteItem: React.StatelessComponent = (props: any) => {
    const {type, text, time, avatar, category} = props;
    return (

        <View>
            <TouchableOpacity>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    marginTop: 20,
                    marginLeft: 20,
                    marginRight: 5
                }}>
                    <TouchableOpacity style={{justifyContent: 'center'}}>
                        <Avatar
                            containerStyle={styles.avatarStyle}
                            rounded
                            source={avatar}
                        />
                    </TouchableOpacity>
                    {generateHiperlinkTextWithTime(
                        <Text numberOfLines={2}
                              style={Object.assign({}, styles.commentRow, {marginLeft: 30,width: props.type !== 'other' ?Dimensions.get("window").width - 170:null})}>
                            {text}
                        </Text>, time
                    )}
                    {type !== 'other' ?
                        <Right>
                            <Button
                                style={{
                                    backgroundColor: type === 'follow' ? colors.darkBlue : colors.white,
                                    justifyContent: 'center',
                                    height: 30,
                                    paddingTop: 4,
                                    paddingBottom: 4,
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    marginTop: 10,
                                    borderWidth: type === 'follow' ? 0 : 1,
                                    borderColor: type === 'follow' ? null : colors.light_gray
                                }}>
                                <Text style={{
                                    color: type === 'follow' ? colors.white : colors.black,
                                    fontWeight: 'bold'
                                }}>{type === 'follow' ? 'Follow' : 'Following'}</Text>
                            </Button>
                        </Right>:null}
                </View>
            </TouchableOpacity>
        </View>

    )
        ;
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
        width: 40,
        height: 40,
        borderColor: colors.light_gray,
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 20,
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

export default FavoriteItem;
