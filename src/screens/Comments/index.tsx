import React, {Fragment} from 'react';
import {
    StyleSheet,
    View, StatusBar, RefreshControl, ScrollView, TextInput, Dimensions, TouchableOpacity
} from "react-native";
import {SafeAreaView} from "react-navigation";
import HeaderToolbar from '../../components/toolbar/index'
import Separator from "../../components/separator";
import CommentItem from "../../components/commentItem/index";

import {Button, Text, Container, Icon, Header, Body, Content, Footer, FooterTab, Left, Right, Title} from "native-base";
import {colors} from "../../utils/theme";
import {Image} from "react-native-elements";

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


    onRefresh = () => {
        this.setState({setRefreshing: true});
        this.wait(2000).then(() => {
            this.setState({setRefreshing: false});
        });
    };

    render() {

        return (
            <Container>
                <Header style={{backgroundColor: colors.white}}>
                    <Left>
                        <Button transparent>
                            <Icon type={"MaterialCommunityIcons"} fontSize={32} style={{color: colors.black}}
                                  name='chevron-left'/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>Comments</Title>
                    </Body>
                    <Right>
                        <TouchableOpacity>
                            <Image style={{width: 26, height: 26}} source={require('../../assets/images/direct.png')}/>
                        </TouchableOpacity>
                    </Right>
                </Header>
                <Content>
                    <ScrollView
                        refreshControl={
                            <RefreshControl refreshing={this.state.refreshing} onRefresh={() => this.onRefresh}/>
                        }
                        contentInsetAdjustmentBehavior="automatic"
                        style={styles.scrollView}>
                        <View style={{paddingLeft:10, paddingRight:10, paddingTop:15, paddingBottom:15}}>
                            <CommentItem   canReply={false} linesType="multilines" context="Comments" NumberOfLines={4} author="setoo9"
                                          message="❤️❤️❤️ Awesome work. keep up✨❤️ Awesome work. keep up✨❤️ Awesome work. keep up✨❤️ Awesome work. keep up✨" avatar={true}/>
                        </View>
                        <Separator/>
                        <Content padder refreshing={true}>

                            <CommentItem   canReply={true} linesType="multilines" context="Comments" NumberOfLines={1} author="Davila Ruise"
                                           message="❤️ I miss you honney. keep working✨" avatar={true}/>

                            <CommentItem   canReply={false} linesType="multilines" context="Comments" NumberOfLines={1} author="Jenny Scofield"
                                           message="Hi sir , can you please suggest me some ressourses please :)" avatar={true}/>

                            <CommentItem   canReply={false} linesType="multilines" context="Comments" NumberOfLines={1} author="Abela Menson"
                                           message="Lol. Instagram is a very great app. Keep moving and learning huys" avatar={true}/>

                            <CommentItem   canReply={false} linesType="multilines" context="Comments" NumberOfLines={1} author="Daniel Jee"
                                           message="Hi. I'm new here, where to start ? can i found some friends here , please ?" avatar={true}/>

                            <CommentItem   canReply={true} linesType="multilines" context="Comments" NumberOfLines={1} author="Davila Ruise"
                                           message="❤️ I miss you honney. keep working✨" avatar={true}/>

                            <CommentItem   canReply={false} linesType="multilines" context="Comments" NumberOfLines={1} author="Jenny Scofield"
                                           message="Hi sir , can you please suggest me some ressourses please :)" avatar={true}/>

                            <CommentItem   canReply={false} linesType="multilines" context="Comments" NumberOfLines={1} author="Abela Menson"
                                           message="Lol. Instagram is a very great app. Keep moving and learning huys" avatar={true}/>

                            <CommentItem   canReply={false} linesType="multilines" context="Comments" NumberOfLines={1} author="Daniel Jee"
                                           message="Hi. I'm new here, where to start ? can i found some friends here , please ?" avatar={true}/>


                        </Content>
                    </ScrollView>

                </Content>
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
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
