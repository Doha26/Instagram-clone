import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';
import {Icon, Container, Content, Header, Left, Body, Right, Button, Spinner} from 'native-base';
import PostsImages from '~/utils/datas/postImages'
import CardComponent from '~/components/card/CardComponent';
import StoryItem from "~/components/storyItems/storyItem/index";
import {colors} from "~/utils/theme";
import AuxHOC from "~/containers/Aux";


const {width, height} = Dimensions.get('window');

export default class ProfileTab extends Component {

    constructor(props: any) {
        super(props);

        this.state = {
            name: '',
            reputation: 0,
            loadingData: false,
            profile: {},
            postCount: 0,
            followingCount: 0,
            followerCount: 0,
            activeIndex: 0,
            blogs: []
        };
    }

    openDetail = () => {
        this.props.navigation.navigate('PostDetail');
    };

    wait = (timeout: number) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    };

    segmentClicked = (index: number) => {
        this.setState({
            activeIndex: index,
            loadingData: true
        });

        this.wait(1000).then(()=>{
            this.setState({
                loadingData: false
            });
        });
    };

    renderSectionOne = () => {
        return (
            <AuxHOC>
                <Spinner  color={colors.dark_gray} style={{
                    marginLeft: (width / 2) - 20,
                    marginTop:30,
                    marginRight: 'auto',
                    display: this.state.loadingData ? 'flex' : 'none'
                }}/>
                {PostsImages.map((image, index) => (
                    <View key={index} style={{width: width / 3, height: width / 3}}>
                        <TouchableOpacity style={{flex: 1, display: this.state.loadingData ? 'none' : 'flex'}}
                                          onPress={this.openDetail}>
                            <Image source={{url: image}} style={{flex: 1}}/>
                        </TouchableOpacity>
                    </View>
                ))}
            </AuxHOC>


        );
    };

    renderSectionTwo = () => {
        return this.state.blogs.map(blog => (
            <CardComponent data={blog} key={blog.url}/>
        ));
    };

    renderSection = () => {
        if (this.state.activeIndex === 0) {
            return (
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    {this.renderSectionOne()}
                </View>
            )
        } else if (this.state.activeIndex === 1) {
            return (
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    {this.renderSectionOne()}
                </View>
            )
        }
    };

    componentWillMount() {

    }

    render() {
        // @ts-ignore
        const {name, reputation, profile, postCount, followingCount, followerCount} = this.state;

        return (
            <Container style={{flex: 1, backgroundColor: 'white'}}>
                <Header style={{backgroundColor: colors.white}}>
                    <Left>
                        <Button transparent onPress={this.goBack}>
                            <Icon type={"MaterialCommunityIcons"} fontSize={32} style={{color: colors.black}}
                                  name='chevron-left'/>
                        </Button>
                    </Left>
                    <Body>
                    <TouchableOpacity>
                        <Text style={{fontSize: 18, color: colors.black, fontWeight: 'bold'}}>pavel_foujeu</Text>
                    </TouchableOpacity>
                    </Body>
                    <Right>
                        <Icon type={"MaterialCommunityIcons"} name="menu" style={{paddingRight: 10, fontSize: 32}}/>
                    </Right>
                </Header>
                <Content>
                    <View style={{flexDirection: 'row', paddingTop: 10}}>
                        <View style={{flex: 1, alignItems: 'center'}}>
                            <StoryItem title="" key={0} isLive={false} isBtnProfile={true}
                                       image={require('../../assets/images/post1.png')}/>
                        </View>
                        <View style={{flex: 3}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                                <View style={{alignItems: 'center'}}>
                                    <Text style={styles.countable}>104</Text>
                                    <Text style={{fontSize: 13, color: 'gray'}}>posts</Text>
                                </View>
                                <View style={{alignItems: 'center'}}>
                                    <Text style={styles.countable}>5023</Text>
                                    <Text style={{fontSize: 13, color: 'gray'}}>followers</Text>
                                </View>
                                <View style={{alignItems: 'center'}}>
                                    <Text style={styles.countable}>22</Text>
                                    <Text style={{fontSize: 13, color: 'gray'}}>following</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Button bordered dark
                                        style={{
                                            flex: 4,
                                            marginLeft: 10,
                                            justifyContent: 'center',
                                            height: 30,
                                            marginTop: 10
                                        }}>
                                    <Text>Edit Profile</Text>
                                </Button>
                                <Button bordered dark small icon
                                        style={{
                                            flex: 1,
                                            marginRight: 10,
                                            marginLeft: 5,
                                            justifyContent: 'center',
                                            height: 30,
                                            marginTop: 10
                                        }}>
                                    <Icon name="settings"/>
                                </Button>
                            </View>
                        </View>
                    </View>
                    <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
                        <Text style={{fontWeight: 'bold', fontSize: 15}}>Pavel Foujeu</Text>
                        <Text style={{fontSize: 15}}>Doing Fun with #Android - #Swift - #React and #React-Native.</Text>
                        <Text style={styles.userEmail}>foujeupavel@gmail.com</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        borderTopWidth: 1,
                        borderTopColor: '#eae5e5'
                    }}>
                        <Button transparent
                                onPress={() => this.segmentClicked(0)}
                                active={this.state.activeIndex === 0}>
                            <Icon name='grid' type={"MaterialCommunityIcons"}
                                  style={[this.state.activeIndex === 0 ? {} : {color: 'grey'}]}/>
                        </Button>
                        {/*
                        <Button transparent
                                onPress={() => this.segmentClicked(1)}
                                active={this.state.activeIndex === 1}>
                            <Icon name='ios-list'
                                  style={[this.state.activeIndex === 1 ? {} : {color: 'grey'}]}/>
                        </Button>
                        */}
                        <Button transparent
                                onPress={() => this.segmentClicked(1)}
                                active={this.state.activeIndex === 1}>
                            <Icon name='clipboard-account' type={"MaterialCommunityIcons"}
                                  style={[this.state.activeIndex === 1 ? {} : {color: 'grey'}]}/>
                        </Button>
                    </View>
                    {this.renderSection()}
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    userEmail: {
        color: colors.fullDarkBlue,
        fontSize: 15
    },
    countable: {
        fontWeight: 'bold',
        fontSize: 15
    }
});
