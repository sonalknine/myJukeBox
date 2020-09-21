import React, { Component } from 'react';
import {View, SafeAreaView, StyleSheet, Image, Text} from 'react-native';
import Header from '../component/Header';

class DetailScreen extends Component {
  goBack(){
    console.log('goBack');
    this.props.navigation.navigate('Home');
  }
  render(){
    const data = this.props.navigation.getParam('data');
    console.log('data>>', data)
    return(
      <SafeAreaView style={styles.container}>
        <Header 
          backEnabled={true}
          goBack={()=> this.goBack()}
          title={data && data.item && data.item.artistName}
        />
        <View style={styles.bodyView}>
          <Image 
            source={{uri: data && data.item && data.item.artworkUrl100}}
            style={styles.imageView}
          />
          <View style={styles.cardView}>
            <Text>
              Artist ID: {data.item.collectionArtistId}
            </Text>
            <Text>
              Collection Name: {data.item.collectionName}
            </Text>
            <Text>
              Price: {data.item.currency + data.item.collectionPrice}
            </Text>
            <Text>
              Country: {data.item.country}
            </Text>
            <Text>
              Long Description: {data.item.longDescription}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageView: {
    width: 100,
    height: 100,
  },
  bodyView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: 4,
  },
  cardView: {
    padding: 4,
    margin: 4,
    borderRadius: 5,
    borderWidth: 2,
  }
});

export default DetailScreen;