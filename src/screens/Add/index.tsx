import React from 'react';
import {
    StyleSheet,
    View,
    Text, Dimensions
} from "react-native";
import {Body, Button, Container, Content, Footer, Header, Left, Right, Title, FooterTab, Icon} from "native-base";
import {colors} from "../../utils/theme";
import Modal from "react-native-modalbox";
import {NavigationEvents} from "react-navigation";
import Swiper from 'react-native-swiper'
import GalleryView from "../../components/GalleryView/GalleryView";


export default class Add extends React.Component {


    constructor(props: any) {
        super(props);
        this.state = {
            isModalOpen: false,
            activeIndex: 0
        };
    }

    segmentClicked = (index: number) => {
        this.setState({
            activeIndex: index
        })
    };

    render() {
        // @ts-ignore
        const {isModalOpen} = this.state;


        return (
            <Container>
                <NavigationEvents
                    onDidFocus={payload => {
                        this.setState({isModalOpen: true})
                    }
                    }
                />
                <Modal
                    style={styles.modal}
                    isOpen={isModalOpen}
                    onClosed={() => {
                        this.setState({isModalOpen: false});

                    }}
                    position="center"
                    swipeToClose
                    swipeArea={250}
                    backButtonClose>
                    <Header style={{backgroundColor: colors.white}}>
                        <Left>
                            <Button transparent onPress={this.goBack}>
                                <Text style={styles.btnActions}>Cancel</Text>
                            </Button>
                        </Left>
                        <Body>
                        <Text style={styles.btnActions}>Gallery</Text>
                        </Body>
                        <Right>
                            <Button transparent onPress={this.goBack}>
                                <Text style={styles.btnActions}>Next</Text>
                            </Button>
                        </Right>
                    </Header>
                    <Content>
                        <Swiper style={styles.wrapper} showsButtons={false} showsPagination={false} index={0} onIndexChanged={(index:number)=>this.setState({activeIndex:index})}>
                            <View style={styles.slide1}>
                             <GalleryView/>
                            </View>
                            <View style={styles.slide2}>
                                <Text style={styles.btnActions}>Beautiful</Text>
                            </View>
                            <View style={styles.slide3}>
                                <Text style={styles.btnActions}>And simple</Text>
                            </View>
                        </Swiper>
                    </Content>
                    <Footer style={{height:20 , backgroundColor:colors.white}}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            flex:1
                        }}>
                            <Button transparent
                                    onPress={() => this.segmentClicked(0)}
                                    active={this.state.activeIndex === 0}>
                                <Text style={Object.assign({},styles.btnActions,{color:this.state.activeIndex === 0 ? colors.black:colors.dark_gray})}>Gallery</Text>
                            </Button>
                            <Button transparent
                                    onPress={() => this.segmentClicked(1)}
                                    active={this.state.activeIndex === 1}>
                                <Text style={Object.assign({},styles.btnActions,{color:this.state.activeIndex === 1 ? colors.black:colors.dark_gray})}>Photo</Text>
                            </Button>
                            <Button transparent
                                    onPress={() => this.segmentClicked(2)}
                                    active={this.state.activeIndex === 0}>
                                <Text style={Object.assign({},styles.btnActions,{color:this.state.activeIndex === 2 ? colors.black:colors.dark_gray})}>Video</Text>
                            </Button>
                        </View>
                    </Footer>
                </Modal>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {},
    paddingContainer: {
        flexDirection: 'column',
        padding: 16
    },
    btnActions: {
        fontWeight: 'bold',
        fontSize: 17
    },
    marginContainer: {
        marginTop: 16
    },
    modal: {
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        flex: 1
    },
    scene: {
        flex: 1,
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
});
