import React from "react";
import {View,TouchableOpacity, Dimensions} from "react-native";
import {Avatar, Text} from "react-native-elements";
import {colors} from "~/utils/theme";
import { Right, Button} from "native-base";
import {generateHiperlinkTextWithTime} from "~/utils/methods";
import styles from "~/components/favoriteItem/styles";

const FavoriteItem: React.StatelessComponent = (props: any) => {
    const {type, text, time, avatar} = props;
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
    );
};


export default FavoriteItem;
