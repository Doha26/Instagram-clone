import React, {Fragment} from 'react';
import {
    StyleSheet,
    View, RefreshControl, ScrollView, TextInput, Dimensions
} from "react-native";
import HeaderToolbar from '~/components/toolbar/index'
import StoryItems from '~/components/storyItems/index'
import Modal from "react-native-modalbox";
import StoriesData from '~/components/StorySlide/StoriesData/StoriesData'
import PostItems from "~/components/postItems";
import Separator from "~/components/separator";
import styles from "~/screens/Home/styles";

export default class Home extends React.PureComponent<any, any> {


    constructor(props: any) {
        super(props);

        this.state = {
            refreshing: false,
            setRefreshing: false,
            isModalOpen: false,
            isGalleryModalOpen: false,
            orderedStories: null,
            selectedStory: null
        };
    }

    componentDidMount(): void {
        const {nav} = this.props;
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

    _handleStoryItemPress = (item: any, index: any) => {
        this.setState({selectedStory: item});
        this.setState({isModalOpen: true});
    };


    render() {
        const {isModalOpen, refreshing} = this.state;
        const {navigation} = this.props;

        return (
            <Fragment>
                <View style={styles.fragment}>
                    <HeaderToolbar onClicked={() => navigation.navigate('Root')} context="Home"/>
                    <ScrollView
                        refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={() => this.onRefresh}/>
                        }
                        contentInsetAdjustmentBehavior="automatic"
                        style={styles.scrollView}>
                        <View>
                            <View style={Object.assign({}, styles.marginContainer, styles.storiesContainer)}>
                                <StoryItems onClicked={this._handleStoryItemPress}/>
                            </View>
                            <Separator/>
                            <PostItems navigation={navigation}/>
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

