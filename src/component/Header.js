import React, {Component} from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';

class Header extends Component {
  render(){
    const {backEnabled, title} = this.props;
    return(
      <View style={styles.conatiner}>
        <View style={styles.backButton}>
          {backEnabled && <Button 
            onPress={() => this.props.goBack()}
            title={"Back"}
          />}
        </View>
        <Text style={styles.titleStyle}>
          {title}
        </Text>
      </View>

    );
  }

}

const styles = StyleSheet.create({
  conatiner: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  backButton: {
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  titleStyle : {
    alignSelf: 'center',
    textAlign: 'center',
    flex: 1,
  }
});
export default Header;