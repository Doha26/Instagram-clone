import React from 'react';
import {
    StyleSheet,
    View, RefreshControl, ScrollView
} from "react-native";
import {Button, Text, Container, Icon, Header, Body, Content,Left, Right, Title} from "native-base";
import {colors} from "../../utils/theme";
import PostItems from "../../components/postItems/index";

export default class PostDetail extends React.Component {


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
                    <Title>Posts</Title>
                    </Body>
                    <Right>

                    </Right>
                </Header>
                <Content>
                    <ScrollView
                        refreshControl={
                            <RefreshControl refreshing={this.state.refreshing} onRefresh={() => this.onRefresh}/>
                        }
                        contentInsetAdjustmentBehavior="automatic"
                        style={styles.scrollView}>
                        <View>
                            <PostItems navigation={this.props.navigation}/>
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
