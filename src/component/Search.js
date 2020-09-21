import React, {Component} from 'react';
import {Button, TextInput, View, StyleSheet} from 'react-native';

class Search extends Component {
  render() {
    const {value} = this.props;
    return(
      <View style={styles.searchView}>
        <TextInput 
          value={value}
          onChangeText={(text) => this.props.onValueChange(text)}
          style={styles.inputView}
        />
        <Button 
          title={"Search"}
          onPress={()=> this.props.onSearch()}
          style={styles.buttonView}
        />
      </View>     
    );
  }
}
const styles = StyleSheet.create({
  searchView: {
    flexDirection: 'row',
    margin: 5,
    borderColor: 'black',
    borderWidth: 2,
  },
  inputView: {
    flex: 1,
  },
  buttonView: {
    justifyContent: 'center',
    right: 0,
    width: '10%',
  }
});

export default Search;