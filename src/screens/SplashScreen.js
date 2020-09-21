import React, { Component } from 'react';
import {View, StyleSheet, Button, Text, SafeAreaView} from 'react-native';

class SplashScreen extends Component {
  componentDidMount(){
    setTimeout(()=> {
      this.gotoHome();
    }, 5000)
  }
  gotoHome(){
    this.props.navigation.navigate('Home');
  }
  render(){
    return(
      <SafeAreaView style={styles.container}>
        <View style={styles.message}>
          <Text>
            Welcome to MyJukeBox
          </Text>
        </View>
        <Button 
          onPress={()=> this.gotoHome()}
          title={"Go To Home"}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
  },
  message: {
    width: '100%',
    height: '80%',
    alignItems: 'center',
    justifyContent: "center",
  },
});

export default SplashScreen;