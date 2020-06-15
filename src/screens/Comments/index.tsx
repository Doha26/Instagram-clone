import React from 'react';
import {
    View,
    RefreshControl,
    ScrollView,
    TouchableOpacity,
    KeyboardAvoidingView,
    TextInput
} from "react-native";
import Separator from "~/components/separator";
import CommentItem from "~/components/commentItem/index";
import {
    Button,
    Text,
    Container,
    Icon,
    Header,
    Body,
    Content,
    Footer,
    Left,
    Right,
    Title,
    Spinner
} from "native-base";
import {colors} from "~/utils/theme";
import {Avatar, Image} from "react-native-elements";
import CommentsEmojis from "~/utils/datas/emojis";
import styles from "~/screens/Comments/styles";
import PostComments from "~/utils/datas/postComments";

export default class Comments extends React.PureComponent<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            refreshing: false,
            setRefreshing: false,
            loading: true,
            isModalOpen: false,
            orderedStories: null,
            selectedStory: null
        };
    }

    componentDidMount(): void {
        this.wait(2000).then(() => {
            this.setState({loading: false});
        });
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
        const {refreshing} = this.state;
        return (
            <Container>
                <Header style={{backgroundColor: colors.white}}>
                    <Left>
                        <Button transparent onPress={this.goBack}>
                            <Icon type={"MaterialCommunityIcons"} fontSize={32} style={{color: colors.black}}
                                  name='chevron-left'/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Comments</Title>
                    </Body>
                    <Right>
                        <TouchableOpacity>
                            <Image style={{width: 26, height: 26}} source={require('~/assets/images/direct.png')}/>
                        </TouchableOpacity>
                    </Right>
                </Header>
                <Content>
                    <ScrollView
                        refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={() => this.onRefresh}/>
                        }
                        contentInsetAdjustmentBehavior="automatic"
                        style={styles.scrollView}>
                        <View style={styles.commentContainer}>
                            <CommentItem canReply={false} linesType="multilines" context="Comments" NumberOfLines={4}
                                         author="setoo9"
                                         message="❤️❤️❤️ Awesome work. keep up✨❤️ Awesome work. keep up✨❤️ Awesome work. keep up✨❤️ Awesome work. keep up✨"
                                         avatar={true}/>
                        </View>
                        <Separator/>
                        <Spinner color={colors.dark_gray}
                                 style={[styles.spinner, {display: this.state.loading ? 'flex' : 'none'}]}/>
                        <Content padder style={{display: this.state.loading ? 'none' : 'flex'}}>
                            {PostComments.map((comment: any) => (
                                <CommentItem key={comment.id} canReply={comment.canReply} linesType="multilines"
                                             context="Comments" NumberOfLines={1}
                                             author={comment.author}
                                             message={comment.message} avatar={true}/>
                            ))}
                        </Content>
                    </ScrollView>
                </Content>
                <Footer style={styles.footer}>
                    <KeyboardAvoidingView>
                        <View style={{flex: 1}}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}>
                                {CommentsEmojis.map((emoji: any) => (
                                    <TouchableOpacity key={emoji.id}>
                                        <Text numberOfLines={1}
                                              style={styles.emoji}>{emoji.text}️</Text>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                            <View style={styles.inputZone}>
                                <TouchableOpacity style={{justifyContent: 'center'}}>
                                    <Avatar
                                        size="large"
                                        containerStyle={styles.avatarStyle}
                                        rounded
                                        source={require('~/assets/images/ic8.png')}
                                    />
                                </TouchableOpacity>
                                <TextInput underlineColorAndroid='transparent' style={styles.inputStyle}
                                           placeholder='Add a comment...' placeholderTextColor={colors.light_gray}
                                />
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </Footer>
            </Container>
        );
    }
}

