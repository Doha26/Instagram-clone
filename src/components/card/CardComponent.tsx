import React  from 'react';
import {Image, Text,TouchableOpacity } from 'react-native';

import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon, Title } from 'native-base';

export default class CardCompnent extends React.PureComponent<any,any> {
  render() {

    const { data, onPress } = this.props;
    const { image } = JSON.parse(data.json_metadata);
    return (
      <TouchableOpacity onPress={ onPress }>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail
                source={{ uri: `https://steemitimages.com/u/${data.author}/avatar` }} />
              <Body>
                <Text>{data.author}</Text>
                <Text note>{new Date(data.created).toDateString()}</Text>
              </Body>
            </Left>
          </CardItem>
          {
            image && image.length ?
            <CardItem cardBody>

              <Image
                source={{ uri: `https://steemitimages.com/640x0/${image[0]}` }}
                style={{ height:200, width:null, flex: 1 }} />
            </CardItem> : null
          }
          <CardItem>
            <Body>
              <Text style={{ fontSize: 20, fontWeight:'900', color:'black', marginBottom: 5}}>{ data.title }</Text>
              <Text numberOfLines={5} ellipsizeMode="tail">
              {/* { data.body.replace(/\n/g,' ').slice(0, 200) } */}
              { data.summary }
              </Text>
            </Body>
          </CardItem>
          <CardItem style={{ height:45 }}>
            <Left>
              <Button transparent>
                <Icon name='ios-heart' style={{ color:'black', marginRight: 5 }}/>
                <Text>{ data.active_votes.length }</Text>
              </Button>
              <Button transparent>
                <Icon name='ios-chatbubbles' style={{ color:'black', marginRight: 5 }}/>
                <Text>{ data.children }</Text>
              </Button>
              <Button transparent textStyle={{color: '#87838B'}}>
                <Icon name='ios-send' style={{ color:'black' }}/>
              </Button>
            </Left>
            <Right>
              <Text>{ data.pending_payout_value }</Text>
            </Right>
          </CardItem>
        </Card>
      </TouchableOpacity>
    );
  }
}

