import React from 'react';
import {
    StyleSheet,
    View,
    RefreshControl,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    KeyboardAvoidingViewComponent,
    KeyboardAvoidingView,
    TextInput
} from "react-native";
import Separator from "../../components/separator";
import CommentItem from "../../components/commentItem/index";

import {
    Button,
    Text,
    Container,
    Icon,
    Header,
    Body,
    Content,
    Footer,
    FooterTab,
    Left,
    Right,
    Title,
    Spinner
} from "native-base";
import {colors} from "../../utils/theme";
import {Avatar, Image} from "react-native-elements";
import Filters from "../../utils/filers";
import AvatarInput from "../../components/avatarInput/index";

export default class Comments extends React.Component {


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
                        <View style={{paddingLeft: 10, paddingRight: 10, paddingTop: 15, paddingBottom: 15}}>
                            <CommentItem canReply={false} linesType="multilines" context="Comments" NumberOfLines={4}
                                         author="setoo9"
                                         message="❤️❤️❤️ Awesome work. keep up✨❤️ Awesome work. keep up✨❤️ Awesome work. keep up✨❤️ Awesome work. keep up✨"
                                         avatar={true}/>
                        </View>
                        <Separator/>
                        <Spinner color={colors.dark_gray} style={{
                            marginLeft: (Dimensions.get("window").width / 2) - 20,
                            marginTop: 30,
                            marginRight: 'auto',
                            display: this.state.loading ? 'flex' : 'none'
                        }}/>
                        <Content padder style={{display: this.state.loading ? 'none' : 'flex'}}>

                            <CommentItem canReply={true} linesType="multilines" context="Comments" NumberOfLines={1}
                                         author="Davila Ruise"
                                         message="❤️ I miss you honney. keep working✨" avatar={true}/>

                            <CommentItem canReply={false} linesType="multilines" context="Comments" NumberOfLines={1}
                                         author="Jenny Scofield"
                                         message="Hi sir , can you please suggest me some ressourses please :)"
                                         avatar={true}/>

                            <CommentItem canReply={false} linesType="multilines" context="Comments" NumberOfLines={1}
                                         author="Abela Menson"
                                         message="Lol. Instagram is a very great app. Keep moving and learning huys"
                                         avatar={true}/>

                            <CommentItem canReply={false} linesType="multilines" context="Comments" NumberOfLines={1}
                                         author="Daniel Jee"
                                         message="Hi. I'm new here, where to start ? can i found some friends here , please ?"
                                         avatar={true}/>

                            <CommentItem canReply={true} linesType="multilines" context="Comments" NumberOfLines={1}
                                         author="Davila Ruise"
                                         message="❤️ I miss you honney. keep working✨" avatar={true}/>

                            <CommentItem canReply={false} linesType="multilines" context="Comments" NumberOfLines={1}
                                         author="Jenny Scofield"
                                         message="Hi sir , can you please suggest me some ressourses please :)"
                                         avatar={true}/>

                            <CommentItem canReply={false} linesType="multilines" context="Comments" NumberOfLines={1}
                                         author="Abela Menson"
                                         message="Lol. Instagram is a very great app. Keep moving and learning huys"
                                         avatar={true}/>

                            <CommentItem canReply={false} linesType="multilines" context="Comments" NumberOfLines={1}
                                         author="Daniel Jee"
                                         message="Hi. I'm new here, where to start ? can i found some friends here , please ?"
                                         avatar={true}/>


                        </Content>
                    </ScrollView>

                </Content>
                <Footer style={{height:110 , padding:10 , backgroundColor:colors.white}}>
                    <KeyboardAvoidingView>
                        <View style={{flex: 1}}>
                            <ScrollView
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}>
                                <TouchableOpacity>
                                    <Text numberOfLines={1}
                                          style={styles.emoji}>❤️</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text numberOfLines={1}
                                          style={styles.emoji}>🤣</Text>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Text numberOfLines={1}
                                          style={styles.emoji}>🙌</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text numberOfLines={1}
                                          style={styles.emoji}>🔥</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text numberOfLines={1}
                                          style={styles.emoji}>🔥</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text numberOfLines={1}
                                          style={styles.emoji}>👏</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text numberOfLines={1}
                                          style={styles.emoji}>😥</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text numberOfLines={1}
                                          style={styles.emoji}>😍</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text numberOfLines={1}
                                          style={styles.emoji}>😲</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text numberOfLines={1}
                                          style={styles.emoji}>😎</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text numberOfLines={1}
                                          style={styles.emoji}>😤</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text numberOfLines={1}
                                          style={styles.emoji}>😈</Text>
                                </TouchableOpacity>
                            </ScrollView>
                            <View style={styles.inputZone}>
                                <TouchableOpacity style={{justifyContent:'center'}}>
                                    <Avatar
                                        size="large"
                                        containerStyle={styles.avatarStyle}
                                        rounded
                                        source={require('../../assets/images/ic8.png')}
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
    emoji: {
        marginLeft: 10,
        fontSize: 19
    },
    inputZone:{
        flexDirection:'row',
        flex:10,
        justifyContent: 'center',
        alignItems:'center'
    },
    avatarStyle:{
        width:45,
        height:45,
        alignSelf:'center',
        borderRadius: 22.5,
    },
    inputStyle:{
        fontSize:13,
        height:40,
        fontWeight:"400",
        marginLeft:10, padding:3,
        paddingLeft:10,
        borderWidth:1,
        borderColor:colors.light_gray,
        borderRadius:20,
        flex:6
    },
    scrollView: {},

});
