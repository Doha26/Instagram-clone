import React, {Component, Fragment} from "react";
import {Dimensions, StyleSheet, TextInput} from "react-native";
import Modal from "react-native-modalbox";

import StoriesData from "~/components/StorySlide/StoriesData/StoriesData";


export default class SlideView extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
            isModalOpen: false,
            orderedStories: null,
            selectedStory: null
        };
    }

    // Component Life Cycles

    // Component Functions
    _handleStoryItemPress = (item: any, index: any) => {

        // @ts-ignore
        const {stories} = this.props;

        this.setState({selectedStory: item});

        const _stories = Array.from(stories);

        const rest = _stories.splice(index);
        const first = _stories;

        const orderedStories = rest.concat(first);

        this.setState({orderedStories});
        this.setState({isModalOpen: true});
    };

    render() {

        // @ts-ignore
        const {isModalOpen, orderedStories, selectedStory} = this.state;

        return (
            <Fragment>
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
                        selectedStory={selectedStory}
                        stories={orderedStories}
                        footerComponent={
                            <TextInput
                                placeholder="Send message"
                                placeholderTextColor="white"
                            />
                        }
                    />
                </Modal>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    storyListContainer: {
        marginTop: 50
    },
    modal: {
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        flex: 1
    }
});
