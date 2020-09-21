import React, { Component } from 'react';
import {FlatList, StyleSheet, SafeAreaView} from 'react-native';
import Header from '../component/Header';
import Search from '../component/Search';
import Artist from '../component/Artist';
import {SearchRepository} from '../repository/SearchRepository';

class HomeScreen extends Component {
  constructor(){
    super();
    this.state = {
      value: '',
      data: null,
    }
  }
  onValueChange(value){
    this.setState({value})
  }
  async searchResult(){
    const searchResult = await SearchRepository.getMethod(this.state.value);
    this.setState({data: searchResult.data});
  }
  onDetailPress(data){
    this.props.navigation.navigate('Detail', {data});
  }
  render(){
    const {value, data} = this.state;
    console.log(data);
    const keyExtractor = (item, index) => {
      return index + "-" + item.collectionId;
    }
    return(
      <SafeAreaView style={styles.conatiner}>
        <Header 
          backEnabled={false}
          title={"Home Page"}
        />
        <Search 
          value={value}
          onValueChange={(text)=> this.onValueChange(text)}
          onSearch={()=> this.searchResult()}
        />
        <FlatList 
          data={data && data.results}
          keyExtractor={(item, index) => keyExtractor(item, index)}
          renderItem={(item) => this.renderItem(item)}
        />
      </SafeAreaView>
    );
  }
  renderItem(item){
    return (
      <Artist 
        data={item}
        onDetailPress={(data) => this.onDetailPress(data)}
      />
    );
  }
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  }
});

export default HomeScreen;