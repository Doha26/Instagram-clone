import React from 'react';
import {
    StyleSheet,
    View, RefreshControl, ScrollView, TouchableOpacity
} from "react-native";
import Separator from "../../components/separator";
import CommentItem from "../../components/commentItem/index";

import {Button, Text, Container, Icon, Header, Body, Content, Footer, FooterTab, Left, Right, Title} from "native-base";
import {colors} from "../../utils/theme";
import {Image} from "react-native-elements";
import FavoriteItem from "../../components/favoriteItem";
import tags from "../../utils/tags";
import SearchTag from "../Search";
import follows from "../../utils/follows";

export default class Comments extends React.Component {


    constructor(props: any) {
        super(props);
        this.state = {
            refreshing: false,
            setRefreshing: false,
            isModalOpen: false,
            orderedStories: null,
            selectedStory: null
        };
    }

    wait = (timeout: number) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    };

    onRefresh = () => {
        this.setState({setRefreshing: true});
        this.wait(2000).then(() => {
            this.setState({setRefreshing: false});
        });
    };

    goBack = () => {
        this.props.navigation.goBack();
    };

    render() {

        return (
            <Container>
                <Header style={{backgroundColor: colors.white}}>
                    <Left></Left>
                    <Body>
                    <Title>Activity</Title>
                    </Body>
                    <Right></Right>
                </Header>
                <Content>
                    <ScrollView
                        refreshControl={
                            <RefreshControl refreshing={this.state.refreshing} onRefresh={() => this.onRefresh}/>
                        }
                        contentInsetAdjustmentBehavior="automatic"
                        style={styles.scrollView}>
                        <View style={{marginLeft:10, marginRight:10}}>
                            {
                                follows.map(item => (

                                    <FavoriteItem  key={item.id} type={item.type} linesType="multilines" time={item.time}
                                                   text={item.text} category={item.category} avatar={item.avatar}/>

                                ))
                            }

                        </View>
                    </ScrollView>
                </Content>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    paddingContainer: {
        flexDirection: 'column',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10
    },
    marginContainer: {
        marginTop: 16
    },
    scrollView: {},

});
