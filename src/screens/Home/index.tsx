import React, {Fragment} from 'react';
import {
    StyleSheet,
    View, StatusBar, RefreshControl, ScrollView, TextInput, Dimensions
} from "react-native";
import {SafeAreaView} from "react-navigation";
import HeaderToolbar from '../../components/toolbar/index'
import StoryItems from '../../components/storyItems/index'
import Separator from "../../components/separator";
import Modal from "react-native-modalbox";
import stories from "../../utils/stories";
import StoriesData from '../../components/StorySlide/StoriesData/StoriesData'
import PostItems from "../../components/postItems";

export default class Home extends React.Component {


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

    handleClick = () => {
        alert("Profile");
    };

    _handleStoryItemPress = (item: any, index: any) => {

        // @ts-ignore
       // const {stories} = this.props;

        this.setState({selectedStory: item});

        //const _stories = Array.from(stories);

        //const rest = _stories.splice(index);
        //const first = _stories;

       // const orderedStories = rest.concat(first);

       // this.setState({orderedStories});
        this.setState({isModalOpen: true});
    };


    render() {
        // @ts-ignore
        const {isModalOpen} = this.state;

        return (
            <Fragment>
            <View style={styles.fragment}>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView></SafeAreaView>
                <HeaderToolbar/>
                <View style={{marginTop:46}}>
                    <Separator />
                </View>
                <ScrollView
                    refreshControl={
                        <RefreshControl refreshing={this.state.refreshing} onRefresh={() => this.onRefresh}/>
                    }
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View>
                        <View style={Object.assign({}, styles.marginContainer, styles.storiesContainer)}>
                            <StoryItems onClicked={this._handleStoryItemPress}/>
                        </View>
                        <PostItems/>
                    </View>
                </ScrollView>
                <Modal
                    style={styles.modal}
                    isOpen={isModalOpen}
                    onClosed={() => this.setState({isModalOpen: false})}
                    position="center"
                    swipeToClose
                    swipeArea={250}
                    backButtonClose
                >
                    <StoriesData
                        footerComponent={
                            <TextInput
                                placeholder="Send message"
                                placeholderTextColor="white"
                            />
                        }
                    />
                </Modal>
            </View>
            </Fragment>
        );
    }
}
const styles = StyleSheet.create({
    paddingContainer: {
        flexDirection: 'column',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop:10
    },
    marginContainer: {
        marginTop: 16
    },
    scrollView: {
    },
    storiesContainer: {
        flexDirection: 'row'
    },
    fragment: {
        flex: 1,
        flexDirection: 'column'
    },
    storyListContainer: {
        marginTop: 50
    },
    modal: {
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        flex: 1
    }
});
