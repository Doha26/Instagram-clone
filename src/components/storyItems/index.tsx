import React from 'react'
import {ScrollView, TouchableOpacity, View, StyleSheet} from "react-native";
import avatars from '~/utils/datas/avatars'
import StoryItem from "./storyItem";


const storyItems: React.StatelessComponent = (props: any) => {

    return (
        <ScrollView
            style={styles.contactContainerStyle}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <View style={{flex: 1, flexDirection: 'row'}}>
                {
                    avatars.map(avatar => (
                        avatar.id == 0 ? <StoryItem key={avatar.id} isLive={avatar.live} isBtnProfile={true} image={avatar.src} title="Your story"
                                                    clicked={props.onClicked}/> :
                            <StoryItem name={avatar.name} isLive={avatar.live} key={avatar.id} image={avatar.src} clicked={props.onClicked}/>
                    ))
                }
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    contactContainerStyle: {
        marginRight: 5
    },
});
export default storyItems;
