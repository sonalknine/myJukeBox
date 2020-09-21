import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

class Artist extends Component {
  render(){
    const {data} = this.props;
    return(
      <TouchableOpacity style={styles.container} onPress={()=>{this.props.onDetailPress(data)}}>
        <View style={styles.index}>
            <Text>{data.index+1}</Text>
        </View>
        <View style={styles.cardView}>
          <Text>
            {data.item.artistName}
          </Text>
        </View>
        <Image
          source={{uri: data.item.artworkUrl30}} 
          style={styles.imageView}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 4,
    margin: 4,
  },
  index: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 20,
    backgroundColor: 'grey',
  },
  cardView: {
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'left',
    marginLeft: 8,
    width: '80%',
  },
  imageView: {
    right: 0,
    width: 30,
    height: 30,
  }
});

export default Artist;